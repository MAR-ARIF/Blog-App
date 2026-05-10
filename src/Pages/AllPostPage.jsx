import { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import Container from "../components/Container/Container";
import PostCard from "../components/PostCard";

function AllPostPage(){
    const [posts,setPosts] = useState([])

    useEffect(() => {
        databaseService.getPosts().then((posts) => {
            setPosts(posts.documents);
        })
    },[])

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
export default AllPostPage