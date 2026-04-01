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


export async function DELETE(req, { params }) {
  const { id } = await params;

  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    return Response.json({ error: "Post not found" }, { status: 404});
  }

  const deletedPost = posts.splice(index, 1);

  return Response.json({
    message: "Post deleted",
    post: deletedPost[0],
  });
}

export async function PUT(req, { params }) {
  const { id } = await params;
  const body = await req.json();

  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    return Response.json({ error: "Post not found" }, { status:404 });
  }

  posts[index] = {
    ...posts[index],
    ...body,
  };

  return Response.json({
    mesage: "Post updated",
    post: posts[index],
  });
}
