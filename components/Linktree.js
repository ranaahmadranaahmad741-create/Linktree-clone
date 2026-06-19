"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Linktree = () => {
  const router = useRouter();
  const [handle, setHandle] = useState("@username");
  const [bio, setBio] = useState("Creator • Developer • Sharing everything I create");
  const [links, setLinks] = useState([
    { title: "My Portfolio", url: "https://example.com" },
    { title: "Instagram", url: "https://instagram.com" },
  ]);
  const [profilePic, setProfilePic] = useState("/Untitled-removebg-preview.png");
  const [imageUrl, setImageUrl] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const addLink = () => {
    setLinks([...links, { title: "", url: "" }]);
  };

  const updateLink = (index, field, value) => {
    setLinks((current) =>
      current.map((link, i) => (i === index ? { ...link, [field]: value } : link))
    );
  };

  const removeLink = (index) => {
    setLinks((current) => current.filter((_, i) => i !== index));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setProfilePic(reader.result);
        setImageUrl("");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleImageUrlChange = (value) => {
    setImageUrl(value);
    setProfilePic(value || "/Untitled-removebg-preview.png");
  };

  const createLinktree = async () => {
    const trimmedHandle = handle.replace(/^@/, "").trim().toLowerCase();
    if (!trimmedHandle) {
      setStatusMessage("Please enter a valid handle.");
      return;
    }

    if (links.length === 0 || links.every((link) => !link.title || !link.url)) {
      setStatusMessage("Add at least one link with text and URL.");
      return;
    }

    setLoading(true);
    setStatusMessage("Saving your Linktree…");

    const payload = {
      handle: trimmedHandle,
      bio,
      pic: profilePic,
      links,
    };

    try {
      const response = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        setStatusMessage(result.message || "Failed to save your Linktree.");
        toast.error(result.message || "Failed to save your Linktree.");
        setLoading(false);
        return;
      }

      toast.success("Linktree created successfully!");
      setStatusMessage("Linktree created successfully! Redirecting...");
      setTimeout(() => {
        router.push(`/${trimmedHandle}`);
      }, 900);
    } catch (error) {
      setStatusMessage("Unable to save. Please try again.");
      toast.error("Unable to save. Please try again.");
      setLoading(false);
      return;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C084FC] via-[#A855F7] to-[#7E22CE] flex items-center justify-center p-6 overflow-hidden relative">
      <div className="max-w-6xl mb-22 mt-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          <h1 className="text-4xl  font-bold text-white mb-2">Create your Linktree</h1>
          <p className="text-white/70 mb-8">Build your digital home in minutes</p>

          <div className="mb-8">
            <h3 className="text-white font-LinkSans font-semibold mb-3 flex items-center gap-2">
              <span className=" text-xs w-6 h-6 bg-[#3B0764] text-white/80 rounded-full flex items-center justify-center">1</span>
              Claim your Handle
            </h3>
            <input
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="w-full bg-white/10 border border-white/30 text-white placeholder-white/50 rounded-2xl px-6 py-4 focus:outline-none focus:border-white/50"
              placeholder="@yourhandle"
            />
          </div>

          <div className="mb-8">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="bg-[#3B0764] text-white/80 text-xs w-6 h-6 rounded-full flex items-center justify-center">2</span>
              Add Links
            </h3>

            <div className="space-y-4 mb-4">
              {links.map((link, index) => (
                <div key={index} className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto] items-start">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      value={link.title}
                      onChange={(e) => updateLink(index, "title", e.target.value)}
                      placeholder="Link text"
                      className="w-full bg-white/10 border border-white/30 text-white placeholder-white/50 rounded-2xl px-6 py-4 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) => updateLink(index, "url", e.target.value)}
                      placeholder="Link URL"
                      className="w-full bg-white/10 border border-white/30 text-white placeholder-white/50 rounded-2xl px-6 py-4 focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeLink(index)}
                    className="text-white/70 hover:text-white transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addLink}
              className=" hover:bg-[#A855F7]/90 hover:border hover:border-2 hover:border-white/50 transition bg-[#3B0764] text-white/80 font-semibold px-8 py-4 rounded-2xl"
            >
              Add Link
            </button>
          </div>

          <div className="mb-8">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="bg-[#3B0764] text-white/80 text-xs w-6 h-6 rounded-full flex items-center justify-center">3</span>
              Add Picture and Finalize
            </h3>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => handleImageUrlChange(e.target.value)}
              placeholder="Enter image URL"
              className="w-full bg-white/10 border border-white/30 text-white placeholder-white/50 rounded-2xl px-6 py-4 focus:outline-none mb-4"
            />
            <label className="flex flex-col gap-2 text-sm text-white/70 mb-6 cursor-pointer">
              <span>Or upload a profile image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="bg-white/10 border border-white/30 text-white rounded-2xl px-6 py-3 focus:outline-none"
              />
            </label>

            <button
              type="button"
              onClick={createLinktree}
              disabled={loading}
              className="w-full bg-[#3B0764] hover:bg-[#A855F7] text-white/80 font-bold py-4 rounded-2xl text-lg transition transform hover:scale-[1.02] active:scale-[0.98] hover:border hover:border-2 hover:border-white/50  disabled:opacity-60"
            >
              {loading ? "Saving..." : "Create your Linktree"}
            </button>
            {statusMessage ? <p className="mt-4 text-sm text-white/80">{statusMessage}</p> : null}
          </div>
        </div>

        {/* Right side linktree overview */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-[340px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <div className="bg-[#4C1D95] h-2" />
            <div className="p-6 pt-8 bg-[#4C1D95] text-center relative">
              <div className="w-28 h-28 mx-auto rounded-2xl overflow-hidden ring-4 ring-white/30 mb-4 shadow-xl">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-white text-2xl font-bold">{handle}</h2>
              <p className="text-white/80 text-sm mt-1">{bio}</p>

              <div className="mt-8 space-y-3">
                {links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <div className="bg-white/10 hover:bg-white/20 transition backdrop-blur-md border border-white/20 rounded-2xl py-4 text-white font-medium">
                      {link.title || "Untitled Link"}
                    </div>
                  </a>
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
            <img src="joystick.png" className="l-12 w-12" />
          </div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl flex items-center justify-center text-4xl shadow-xl -rotate-12">
            <img src="headphones.png" className="l-12 w-12" />
          </div>
        </div>

      </div>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default Linktree;