import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { db } from "../../config/fairebase";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../../config/fairebase";
import { useAuthState } from "react-firebase-hooks/auth"

function CreateForm() {

    const [user] = useAuthState(auth);


    const schema = yup.object().shape({
        title: yup.string().required("You must add Title"),
        description: yup.string().required("You must add description"),

    });

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
    });

    const oncreatepost = async (data) => {
        await addDoc(postref, {
            ...data,
            username: user?.displayName,
            userid: user?.uid,
        });
    }

    const postref = collection(db, "posts");


    return (
        <div className="flex justify-center mt-24">
            <form className="w-full max-w-sm"
                  onSubmit={handleSubmit(oncreatepost)}      >
                 <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mb-1 ml-1" >{formState.errors.title?.message }</div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                            placeholder="Title..." {...register("title")} />
                    </div>
                </div>
                <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mb-1 ml-1" >{formState.errors.description?.message }</div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-2/3">
                        <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                            placeholder="Desciption..." {...register("description")}/>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <input type="submit" className="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            placeholder="Desciption..." />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateForm;