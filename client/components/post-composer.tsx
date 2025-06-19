import React, { useState } from "react";

export default function PostComposer() {
  const [postText, setPostText] = useState("");

  const handlePost = () => {
    alert(`Post composed: ${postText}`);
    setPostText("");
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Compose Post</h3>
      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={3}
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button
        onClick={handlePost}
        className="bg-success-500 hover:bg-success-600 text-white px-4 py-2 rounded"
      >
        Schedule Post
      </button>
    </div>
  );
}
