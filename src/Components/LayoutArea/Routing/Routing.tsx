import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { Page404 } from "../Page404/Page404";
import { Suspense, lazy } from "react";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
import { WorkersList } from "../../WorkersArea/WorkerList/WorkerList";
import { WorkerDetails } from "../../WorkerArea/WorkerDetails/WorkerDetails";
import { AddWorker } from "../../WorkerArea/AddWorker/AddWorker";

export function Routing(): JSX.Element {

    const LazyAbout = lazy(()=> import("../../AboutArea/About/About"))
    const SuspenseAbout = <Suspense fallback={<Spinner/>} ><LazyAbout/></Suspense>

    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={SuspenseAbout} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/workers" element={<WorkersList />} />
                <Route path="/products/new" element={<AddProduct/>}/>
                <Route path="/workers/new" element={<AddWorker/>}/>
                <Route path="/products/details/:id" element={<ProductDetails />} />
                <Route path="/workers/details/:id" element={<WorkerDetails />} />
                <Route path="/products/edit/:id" element={<EditProduct />} />
                <Route path="/" element={<Navigate to="/home"/>} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
