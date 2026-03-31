"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    router.push("/blogs");
  }

  return (
    <div className="max-w-xl mx-auto py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-3">Create New Post</h1>
        <p className="text-gray-500">Share your thoughts with the world</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-semibold text-gray-700 ml-1">Title</label>
            <input
              id="title"
              type="text"
              placeholder="What's on your mind?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-semibold text-gray-700 ml-1">Content</label>
            <textarea
              id="content"
              placeholder="Tell your story..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full py-4 text-base font-semibold shadow-sm hover:shadow-lg hover:bg-gray-800 transition-all active:scale-[0.98]">
              Publish Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}