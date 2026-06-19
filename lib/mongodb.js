// lib/mongodb.js
import { MongoClient } from "mongodb";
import dns from "node:dns";

// Fix DNS resolution issues
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

const options = {
  serverSelectionTimeoutMS: 30000,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 60000,
  maxPoolSize: 10,
  minPoolSize: 1,
  retryWrites: true,
  w: "majority",
  tls: true,
};

let client;
let clientPromise;

export async function connectToDatabase() {
  if (clientPromise) {
    return clientPromise;
  }

  console.log("🔄 Connecting to MongoDB Atlas...");

  client = new MongoClient(uri, options);
  clientPromise = client.connect();

  try {
    await clientPromise;
    console.log("✅ MongoDB connected successfully!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    clientPromise = null;
    client = undefined;
    throw err;
  }

  return clientPromise;
}