"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DeleteButton({ id }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");

        if (!confirmDelete) return;

        setLoading(true);

        await fetch(`/api/posts/${id}`, {
            method: "DELETE",
        });

        toast.success("Post deleted!");

        router.push("/blogs");
    };

    return(
        <button
            onClick={handleDelete}
            disabled={loading}
            className="mt-10 px-6 py-3 bg-red-600 text-white rounded-lg">
                {loading ? "Deleting..." : "Delete Post"}
            </button>
    );
}