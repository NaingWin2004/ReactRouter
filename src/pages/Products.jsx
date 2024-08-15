import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
    const products = useLoaderData();
    return (
        <div>
            <h1>Products</h1>
            {products.map(product => (
                <Link to={`/product/${product.id}`} key={product.id}>
                    <div className="bg-sky-400 mx-3 my-2 px-1 py-2 font-bold text-white">
                        <p>post by -{product.userId}</p>
                        <p>{product.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Products;

export const loader = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
        throw json({ message: "Can't get post now..." }, { status: 500 });
    } else {
        const products = await res.json();
        return products;
    }
};
