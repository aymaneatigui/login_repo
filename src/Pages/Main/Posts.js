import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { auth } from "../../config/fairebase";
import { db } from "../../config/fairebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useState } from "react";



export const Posts = ({ post }) => {

    const [likeAmount, setLikeAmount] = useState(null);

    const [user] = useAuthState(auth);
    const likeref = collection(db, "likes");

    const likedoc = query(likeref, where("postid", "==", post.id) );

    const getlikes = async () =>{
        const data = await getDocs(likedoc)
        setLikeAmount(data.docs.length);
    }

    const addlike = async (data) => {
        await addDoc(likeref, {
            userid: user?.uid,
            postid: post.id,
        });
        setLikeAmount();
    };
    
    useEffect(()=>{
        getlikes();
    })


    return (
        <div className="flex mt-2 m-auto justify-center ">
            <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md w-5/12">
                <div className="mt-2">
                    <h2 className="text-2xl text-gray-700 font-bold hover:text-gray-600" >Title : {post.title}</h2>
                    <p className="mt-2 text-gray-600">Desciption : {post.description}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div>
                        <div className="flex items-center" >
                            <h1 className="text-gray-700 font-bold">Authore : {post.username}</h1>
                        </div>
                    </div>
                    <button onClick={addlike} className="inline-flex items-center ml-6 mr-1 px-1 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
                    <h1> Likes: {likeAmount && likeAmount } </h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" ml-3 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}