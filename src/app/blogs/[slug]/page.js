import Link from "next/link";
import DeleteButton from "./DeleteButton";

async function getPost(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export default async function BlogPost({ params }) {
    // Next.js 15+ requires params to be awaited
    const { slug } = await params;

    const post = await getPost(slug);

    if (!post || post.error) {
        return (
            <div className="max-w-3xl mx-auto py-20 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Post Not Found</h1>
                <p className="text-gray-500 mb-10 text-lg">The story you are looking for doesn't exist or has been moved.</p>
                <Link href="/blogs">
                    <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all shadow-sm">
                        ← Back to Stories
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <article className="max-w-3xl mx-auto py-16 px-4 font-sans antialiased">
            <Link href="/blogs" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 mb-12 transition-colors group">
                <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to all stories
            </Link>
            
            <header className="mb-12">
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
                    {post.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
                    <span className="text-gray-900 font-bold uppercase tracking-wider text-xs bg-gray-100 px-2 py-1 rounded">Member Post</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>March 31, 2026</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>5 min read</span>
                </div>
            </header>

            <div className="max-w-none text-gray-700 leading-loose space-y-8">
                
                
                <div className="text-lg space-y-6">
                    <p>
                         {post.content}
                    </p>
                </div>
            </div>

            <div>
                <DeleteButton id={post.id}/>
                <Link href={`/dashboard/edit-post/${post.id}`}>
                    <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg">
                        Edit Post
                    </button>
                </Link>
            </div>

            <footer className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400">
                        A
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-900">Antigravity AI</p>
                        <p className="text-xs text-gray-500">Writing about the future of the web.</p>
                    </div>
                </div>
                <button className="px-6 py-2 text-sm bg-gray-50 text-gray-900 border border-gray-100 rounded-full hover:bg-gray-100 transition-all font-bold">
                    Follow
                </button>
            </footer>
        </article>
    );
}