import Link from "next/link";

export default async function ProfilePage() {
    const user = await getUser();

    async function getUser() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            cache: "no-store",
        });
        return res.json();
    }

    return (
        <div className="max-w-2xl mx-auto py-12">
            <h1 className="text-3xl font-bold mb-10 text-gray-900 tracking-tight">Profile</h1>

            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md mb-10">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Member</span>
                        <p className="text-xl font-bold text-gray-900">{user.name}</p>
                    </div>
                    <div className="h-px bg-gray-50 my-2"></div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</span>
                        <p className="text-xl font-medium text-gray-900">{user.email}</p>
                    </div>
                    <div className="h-px bg-gray-50 my-2"></div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Company Name</span>
                        <p className="text-xl font-medium text-gray-900">{user.company.name}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-start">
                <Link href="/dashboard/create-post">
                    <button className="px-10 py-4 font-bold text-white bg-black rounded-lg hover:bg-gray-800 transition-all shadow-md active:scale-95">
                        Create New BlogPost →
                    </button>
                </Link>
            </div>
        </div>
    )
}