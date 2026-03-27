import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogsPage() {
  console.log("SSG: Runs at build time");

  return(
    <div className="space-y-10">
      <header className="border-b border-gray-100 pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">Blogs</h1>
        <p className="text-gray-500 text-lg font-light">Explore our latest thoughts and stories.</p>
      </header>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="group relative flex flex-col items-start p-6 rounded-2xl transition-all hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              <Link href={`/blogs/${post.slug}`}>
                <span className="absolute inset-0" />
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
              {post.content.substring(0, 150)}...
            </p>
            <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
              Read more
              <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}