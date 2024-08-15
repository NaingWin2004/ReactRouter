import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";

import { loader as productsLoader } from "./pages/Products";
import { loader as productDetailLoader } from "./pages/ProductDetail.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: "/about", element: <About /> },
            {
                path: "/products",
                element: <Products />,
                loader: productsLoader
            },
            {
                path: "/product/:id",
                element: <ProductDetail />,
                loader: productDetailLoader
            }
        ]
    }
]);
const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
