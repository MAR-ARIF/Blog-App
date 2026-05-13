import { Link } from "react-router-dom";
import storageService from "../appwrite/storage";

function PostCard({$id , featuredImage, title,userName}){
    return(
        <Link to={`/post/${$id}`}>
            <div className="bg-gray-100 p-4 rounded-xl w-full">
                <div className="w-full flex justify-center mb-4">
                    {featuredImage && (
                        <img
                            src={storageService.getFilePreview(featuredImage)}
                            alt={title}
                            className="rounded-xl"
                        />
                    )}
                </div>
                <h2 className="font-bold text-xl">{title}</h2>
                {userName && (
                    <p className="text-gray-500 text-md mt-1">By- {userName}</p>
                )}


            </div>
        
        </Link>
    )
}
export default PostCard