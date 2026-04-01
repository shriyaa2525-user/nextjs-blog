"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({ post }) {
    const router = useRouter();

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        await fetch(`/api/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content }),
        });

        alert("Post updated!");

        router.push(`/blogs/${post.id}`);
    };
    return(
        <form onSubmit={handleSubmit} className="space-y-6">
            <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-3 rounded"
            />

            <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border p-3 rounded"
            />

            <button 
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-black text-white rounded">
                {loading ? "Updating..." : "Update Post"}
            </button>
        </form>
    )
}