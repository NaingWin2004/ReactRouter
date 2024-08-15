import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError()
    return (
        <div>
            {error.status === 500 ? (
                <h1>{error.data.message}</h1>
            ) : (
                <h1> Page not found</h1>
            )}

            <Link to={"/"}>
                <button className="bg-sky-400 mx-3 my-2 px-1 py-2 font-bold text-white active:scale-95 rounded">
                    Go back Home{" "}
                </button>
            </Link>
        </div>
    );
};

export default Error;
