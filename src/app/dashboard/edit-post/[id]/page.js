import EditForm from "./EditForm";

async function getPost(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) return null;

    return res.json();
}

export default async function EditPage({params}) {
    const { id } = await params;
    const post = await getPost(id);
    
    if (!post) {
        return <div>Post not found</div>;
    }

    return(
        <div className="max-w-2xl mx-auto py-10">
            <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
            <EditForm post={post}/>
        </div>
    );
}