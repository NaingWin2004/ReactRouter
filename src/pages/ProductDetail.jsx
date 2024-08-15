import { useNavigate, useLoaderData } from "react-router-dom";

const ProductDetail = () => {
    const { id, userId, title, body } = useLoaderData();
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate("/products");
    };
    return (
        <div className="flex flex-col text-center font-bold">
            <h1>ProductDetail</h1>
            <div className="text-start mx-3">
                <p>post by -{userId}</p>
                Product - <span className="text-red-400">{id}</span>
                <div className="bg-sky-200 py-1">
                    <p className="text-xl text-white font-black">{title}</p>
                    <p>{body}</p>
                </div>
            </div>
            <button
                onClick={navigateHandler}
                className="bg-sky-400 mx-3 my-2 px-1 py-2 font-bold text-white active:scale-95 rounded"
            >
                Go back products
            </button>
        </div>
    );
};

export default ProductDetail;

export const loader = async ({ request, params }) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    if (!res.ok) {
        throw json({ message: "Can't get post now..." }, { status: 404 });
    } else {
        const post = await res.json();
        return post;
    }
};
