import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/fairebase";
import { useState } from "react";
import { useEffect } from "react";
import { Posts } from "./Posts";

function Home() {

    const [postList, setPostList] = useState(null);
    const postref = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postref);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            {postList?.map((post) => {
                return (
                <Posts post={post} />
                );
            })}
        </div>
    );
}

export default Home;