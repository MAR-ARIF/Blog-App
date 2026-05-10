import Container from "../components/Container/Container";
import PostForm from "../components/PostForm";

function AddPostPage(){
    return(
        <div className="py-8">
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}
export default AddPostPage