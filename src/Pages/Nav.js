import { Link } from "react-router-dom";
import { auth } from "../config/fairebase";
import {useAuthState} from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth";

function Nav() {

    const [user] = useAuthState(auth);

    const signout = async ()=>{
        await signOut(auth);
    }

    return (
        <nav className="bg-gray-900 shadow-lg">
            <div className="mx-auto px-4 py-2 max-w-7xl flex justify-between items-center h-24">
                <div className="flex items-center">
                    <Link to="/" className="text-white font-bold text-lg mr-4">
                        Home
                    </Link>
                </div>
                <div className="flex items-center">
                    {!user ? ( 
                    <Link to="/login" className="text-gray-400 hover:text-white mr-14">
                        Login
                    </Link>
                    ):(
                    <>
                    <Link to="/createpost" className="text-yellow-400 hover:text-gray-100 mr-14">
                        Create Post
                    </Link>
                    <button onClick={signout}
                        className="text-gray-400 hover:text-white focus:outline-none mr-4">
                        Logout
                    </button>
                    <div className="ml-2">
                        <img src={user?.photoURL} alt="Profile" className="rounded-full m-auto" width="45" height="45"/>
                        <p className="text-gray-200 text-sm mt-1">
                            {user?.displayName}
                        </p>
                    </div>
                    </>
                    )}

                </div>
            </div>
        </nav>
    );
}

export default Nav;