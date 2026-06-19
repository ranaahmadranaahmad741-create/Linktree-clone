// lib/mongodb.js
import { MongoClient } from "mongodb";
import { Resolver } from "dns";
import { promisify } from "util";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add MONGODB_URI to .env.local");
}

const options = {
  serverSelectionTimeoutMS: 30000,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 60000,
  maxPoolSize: 10,
  retryWrites: true,
  w: "majority",
  tls: true,
};

let client;
let clientPromise;

/**
 * Converts a mongodb+srv:// URI to a standard mongodb:// URI by
 * resolving the SRV DNS records manually using Google DNS (8.8.8.8).
 *
 * This bypasses Node.js's built-in SRV resolution which fails on
 * Windows with "querySrv ECONNREFUSED" in certain network environments.
 */
async function resolveSrvUri(srvUri) {
  if (!srvUri.startsWith("mongodb+srv://")) {
    return srvUri;
  }

  // Parse the URI manually to preserve original URL-encoding of credentials
  const prefix = "mongodb+srv://";
  const rest = srvUri.slice(prefix.length);

  // Split into credentials and host-part at the first @
  const atIndex = rest.indexOf("@");
  if (atIndex === -1) {
    throw new Error("Invalid mongodb+srv:// URI: missing @ separator");
  }

  const credentials = rest.slice(0, atIndex); // Already URL-encoded
  const hostPart = rest.slice(atIndex + 1);    // hostname[/db][?query]

  // Extract just the hostname from hostPart
  let hostname = hostPart;
  let suffix = "";
  const slashIdx = hostPart.indexOf("/");
  const qIdx = hostPart.indexOf("?");

  if (slashIdx !== -1) {
    hostname = hostPart.slice(0, slashIdx);
    suffix = hostPart.slice(slashIdx);
  } else if (qIdx !== -1) {
    hostname = hostPart.slice(0, qIdx);
    suffix = hostPart.slice(qIdx);
  }

  // Resolve SRV records using a custom resolver with Google DNS
  const resolver = new Resolver();
  resolver.setServers(["8.8.8.8", "8.8.4.4"]);

  const records = await promisify(resolver.resolveSrv.bind(resolver))(
    `_mongodb._tcp.${hostname}`
  );

  // Sort by priority ascending, then weight descending
  records.sort((a, b) => a.priority - b.priority || b.weight - a.weight);

  // Build comma-separated hosts string
  const hosts = records.map((r) => `${r.name}:${r.port}`).join(",");

  // Construct the direct mongodb:// URI
  let directUri = `mongodb://${credentials}@${hosts}${suffix}`;

  // Ensure required connection parameters
  if (!suffix.includes("ssl=") && !suffix.includes("tls=")) {
    directUri += (suffix.startsWith("?") ? "&" : "?") + "ssl=true";
  }
  if (!directUri.includes("authSource=")) {
    directUri += "&authSource=admin";
  }
  if (!directUri.includes("retryWrites=")) {
    directUri += "&retryWrites=true";
  }

  return directUri;
}

export async function connectToDatabase() {
  // Return the already-connected client if available
  if (client && clientPromise) {
    return client;
  }

  console.log("🔄 Connecting to MongoDB Atlas...");

  try {
    // Resolve mongodb+srv:// to direct mongodb:// with explicit hosts
    const directUri = await resolveSrvUri(uri);
    client = new MongoClient(directUri, options);
    clientPromise = client.connect();
    await clientPromise;
    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    client = undefined;
    clientPromise = null;
    throw err;
  }

  return client;
}
