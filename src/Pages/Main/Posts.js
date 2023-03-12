export const Posts = ({post}) => {
    return (
        <div class="flex mt-2 m-auto justify-center ">
            <div class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
                <div class="mt-2">
                    <h2 class="text-2xl text-gray-700 font-bold hover:text-gray-600" >Title : {post.title}</h2>
                    <p class="mt-2 text-gray-600">Desciption : {post.description}</p>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <div>
                        <h3 class="flex items-center" >
                            <h1 class="text-gray-700 font-bold">Authore : {post.username}</h1>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}