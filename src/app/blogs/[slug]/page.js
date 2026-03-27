import Link from "next/link";
import { posts } from "@/data/posts";

export const revalidate = 10;

export default function BlogPost({params}) {
    const { slug } = params;

    console.log("ISR: Page rendering for", slug);

    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
                <Link href="/blogs" className="text-blue-600 hover:underline">
                    Back to all blogs
                </Link>
            </div>
        );
    }

    return(
        <article className="max-w-2xl mx-auto">
            <Link href="/blogs" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 mb-8 transition-colors group">
                <svg className="mr-1 w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to blogs
            </Link>

            <header className="mb-10">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
                    {post.title}
                </h1>
                <div className="flex items-center text-sm text-gray-500">
                    <time dateTime={new Date().toISOString()}>
                        {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </time>
                    <span className="mx-2">&middot;</span>
                    <span>5 min read</span>
                </div>
            </header>

            <div className="prose prose-blue prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                    {post.content}
                </p>
                {/* Mocking more content for visualization */}
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </article>
    );
}