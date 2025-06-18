import React, { useState } from "react";

export default function PostComposer() {
  const [post, setPost] = useState("");

  const handleSubmit = () => {
    alert("Post scheduled: " + post);
    setPost("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Compose New Post</h3>
      <textarea
        className="w-full border p-2 rounded-lg"
        rows={4}
        placeholder="What's on your mind?"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      ></textarea>
      <button
        onClick={handleSubmit}
        className="bg-primary-600 text-white px-4 py-2 mt-2 rounded-lg"
      >
        Schedule Post
      </button>
    </div>
  );
}
