import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import databaseService from "../appwrite/database";
import Container from "../components/Container/Container";
import PostForm from "../components/PostForm";

function EditPostPage(){
    const [post,setPost] = useState(null)
    const slug = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug){
            databaseService.getPost(slug).then ((post) => {
                if(post){
                    setPost(post)
                }
            
            })

        } else {
            navigate("/")
        }
        
    },[slug,navigate])
    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post = {post} />
            </Container>
        </div>
    ) : null
}
export default EditPostPage