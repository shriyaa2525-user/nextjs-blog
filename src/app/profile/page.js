async function getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        cache: "no-store",
    });

    return res.json();
}

export default async function ProfilePage() {
    console.log("SSR: Runing on every request");

    const user = await getUser();

    return(
        <div>
            <h1>Profile SSR</h1>

            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
        </div>
    )
}