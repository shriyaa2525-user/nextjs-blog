"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        console.log("CSR: Fetching in browser");

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data.slice(0, 5)));
    }, []);

    return(
        <div>
            <h1>Admin (CSR)</h1>

            {!posts ? (
                <p>Loading...</p>
            ):(
                posts.map((post) => <p key={post.id}>{post.title}</p>)
            )}
        </div>
    )
}