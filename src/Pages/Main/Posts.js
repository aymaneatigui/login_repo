import { collection, addDoc } from "firebase/firestore";
import { auth } from "../../config/fairebase";
import { db } from "../../config/fairebase";
import { useAuthState } from "react-firebase-hooks/auth"



export const Posts = ({ post }) => {

    const [user] = useAuthState(auth);

    const addlike = async (data) => {
        await addDoc(likeref, {
            userid: user?.uid,
            postid: post.id,
        });
    }

    const likeref = collection(db, "likes");

    return (
        <div className="flex mt-2 m-auto justify-center ">
            <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
                <div className="mt-2">
                    <h2 className="text-2xl text-gray-700 font-bold hover:text-gray-600" >Title : {post.title}</h2>
                    <p className="mt-2 text-gray-600">Desciption : {post.description}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div>
                        <h3 className="flex items-center" >
                            <h1 className="text-gray-700 font-bold">Authore : {post.username}</h1>
                        </h3>
                    </div>
                    <button onClick={addlike} className="inline-flex items-center ml-6 mr-1 px-1 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>                    <button className="inline-flex items-center mx-4 px-1 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    );
}