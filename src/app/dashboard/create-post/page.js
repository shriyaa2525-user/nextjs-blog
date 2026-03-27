"use client"

import {useState } from "react";
import { posts } from "@/data/posts";
import { useRouter } from "next/navigation";

export default function CreatePost() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now().toString(),
      title,
      content,
    };

    posts.push(newPost);

    console.log(posts);

    router.push("/blog");
  }

  return (
    <div>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
      
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br />

      <button type="submit">Create</button>
      </form>
    </div>
  );
}