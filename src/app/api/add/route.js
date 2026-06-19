import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const handle = (body.handle || "").replace(/^@/, "").trim().toLowerCase();

    if (!handle) {
      return NextResponse.json(
        { success: false, error: true, message: "Handle is required." },
        { status: 400 }
      );
    }

    const payload = {
      handle,
      bio: body.bio || "",
      pic: body.pic || "",
      links: Array.isArray(body.links)
        ? body.links.map((link) => ({ 
            title: link.title || "", 
            url: link.url || "" 
          }))
        : [],
      createdAt: new Date(),
    };

    const client = await connectToDatabase();
    const db = client.db("bittree");
    const collection = db.collection("links");

    // Check if handle already exists
    const existing = await collection.findOne({ handle });
    if (existing) {
      return NextResponse.json(
        { success: false, error: true, message: "This Bittree already exists!" },
        { status: 409 }
      );
    }

    const result = await collection.insertOne(payload);

    return NextResponse.json({
      success: true,
      message: "Your Bittree has been generated!",
      result: { ...payload, _id: result.insertedId },
    });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}