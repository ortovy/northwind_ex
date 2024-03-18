import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { Page404 } from "../Page404/Page404";
import { Suspense, lazy } from "react";
import { Spinner } from "../../SharedArea/Spinner/Spinner";

export function Routing(): JSX.Element {

    const LazyAbout = lazy(()=> import("../../AboutArea/About/About"))
    const SuspenseAbout = <Suspense fallback={<Spinner/>} ><LazyAbout/></Suspense>

    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={SuspenseAbout} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/" element={<Navigate to="/home"/>} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
