import Link from "next/link";
import { connectToDatabase } from "../../../lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const resolvedParams = await params;
  const requestedHandle = (resolvedParams.handle || "").replace(/^@/, "").trim().toLowerCase();

  const client = await connectToDatabase();
  const db = client.db("bittree");
  const collection = db.collection("links");

  const item = await collection.findOne({ handle: requestedHandle });
  if (!item) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C084FC] via-[#A855F7] to-[#7E22CE] flex flex-col items-center justify-center p-6 overflow-hidden relative">

      <div className="relative mt-22 flex justify-center w-full max-w-md">
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          <div className="bg-[#4C1D95] h-2" />
          <div className="p-6 pt-8 bg-[#4C1D95] text-center relative">
            <div className="w-28 h-28 mx-auto rounded-2xl overflow-hidden ring-4 ring-white/30 mb-4 shadow-xl">
              <img
                src={item.pic || "/Untitled-removebg-preview.png"}
                alt={item.handle}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-white text-2xl font-bold">@{item.handle}</h2>
            <p className="text-white/80 text-sm mt-1">{item.bio}</p>

            <div className="mt-8 space-y-3">
              {item.links?.map((link, index) => (
                <Link key={index} href={link.url || "#"} target="_blank" rel="noreferrer" className="block">
                  <div className="bg-white/10 hover:bg-white/20 transition backdrop-blur-md border border-white/20 rounded-2xl py-4 text-white font-medium">
                    {link.title || link.url}
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4">
              <div className="text-4xl">🎵</div>
              <div className="flex-1 text-left">
                <p className="text-white text-sm font-medium">GAME OVER</p>
                <p className="text-white/60 text-xs">Some Cool Track • Now Playing</p>
              </div>
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">▶</button>
            </div>
          </div>
        </div>

        <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl flex items-center justify-center text-4xl shadow-xl rotate-12">
          <img src="joystick.png" className="w-12 h-12" />
        </div>
        <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl flex items-center justify-center text-4xl shadow-xl -rotate-12">
          <img src="headphones.png" className="w-12 h-12" />
        </div>
      </div>
      
      <a href="/" className="mt-16 w-38 bg-white/20 hover:bg-white/30 text-white  font-semibold px-6 py-3 rounded-full backdrop-blur-md border border-white/30 transition">
        <div className="item-center justify-center ml-3">
        ← Home
        </div>
      </a>

    </div>
  );
}
