import { posts } from "../route";

// GET SINGLE POST BY ID
export async function GET(req, { params }) {
  // Await params as required by Next.js 16+
  const { id } = await params;

  if (id) {
    const post = posts.find((p) => p.id === id);
    if (!post) {
      return Response.json({ error: "Post not found" }, { status: 404 });
    }
    return Response.json(post);
  }

  return Response.json({ error: "No post ID provided" }, { status: 400 });
}
