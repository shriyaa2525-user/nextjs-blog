// FORCE_REFRESH_01
let posts = [
  {
    id: "1",
    title: "First Post",
    content: "This is the first post",
  },
];

// GET ALL POSTS
export async function GET() {
  return Response.json(posts);
}

// CREATE A NEW POST
export async function POST(req) {
  const body = await req.json();

  const newPost = {
    id: Date.now().toString(),
    ...body,
  };

  posts.push(newPost);

  return Response.json(newPost);
}

// Export the posts array for use in the dynamic route
export { posts };