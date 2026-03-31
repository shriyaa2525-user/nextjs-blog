import Link from "next/link";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  return res.json();
}

export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Recent Stories</h1>
        <Link href="/dashboard/create-post">
          <button className="px-6 py-3 text-sm font-bold bg-black text-white hover:bg-gray-800 transition-all rounded-lg active:scale-95 shadow-sm">
            Write a Story
          </button>
        </Link>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.id} className="group flex flex-col bg-white border border-gray-100 p-8 rounded-2xl shadow-sm transition-all hover:shadow-lg hover:border-gray-200">
            <Link href={`/blogs/${post.id}`} className="flex flex-col h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">Post</span>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4 line-clamp-2">
                {post.title}
              </h2>
              <div className="mt-auto flex items-center justify-between text-sm text-gray-500 font-medium">
                <span>5 min read</span>
                <span className="flex items-center text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                  Read More <span className="ml-1">→</span>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
          <p className="text-xl font-medium text-gray-400">No stories found yet. Start writing today!</p>
          <Link href="/dashboard/create-post" className="inline-block mt-4 text-blue-600 font-bold hover:underline">
            Create your first post
          </Link>
        </div>
      )}
    </div>
  );
}