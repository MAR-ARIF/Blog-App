

import { useSelector } from "react-redux";
import Container from "../components/Container/Container";


function HomePage(){
    const userData = useSelector((state) => state.auth.userData);

   

    if(!userData){
        return (
            <div className="w-full h-96 flex items-center justify-center">
                <Container>
                    <h1 className="text-4xl font-bold hover:text-gray-500 text-center">
                        Login to read posts
                    </h1>
                </Container>
            </div>
        )
        
    }
    return (
        <div className="w-full h-96 flex items-center justify-center">
            <Container>
                <h1 className="text-4xl font-bold hover:text-gray-500 text-center">
                    Welcome to the <span className="text-red-600">Blogg</span>
                </h1>
                <h2 className="text-3xl mt-10 text-center">Click on 'All Posts' to see all the available articles <br/>Click on 'Add Posts' to add article.</h2>
            </Container>
        </div>
    )

} 

export default HomePage