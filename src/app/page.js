import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
        Welcome to <span className="text-blue-600">My Blog</span>
      </h1>
      <p className="max-w-xl text-xl text-gray-600 mb-10 leading-relaxed">
        A minimalist space for sharing stories, ideas, and experiences. 
        Read, write, and connect with a community of thinkers.
      </p>
      
      <div className="flex gap-4">
        <Link href="/blogs">
          <button className="px-10 py-4 text-lg font-bold">
            Read Stories
          </button>
        </Link>
        <Link href="/dashboard/create-post">
          <button className="px-10 py-4 text-lg font-bold bg-white text-gray-900 border border-gray-200 hover:bg-gray-50">
            Start Writing
          </button>
        </Link>
      </div>
    </div>
  );
}
