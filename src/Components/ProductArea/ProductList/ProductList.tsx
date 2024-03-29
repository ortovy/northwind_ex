import { useEffect, useState } from "react";
import "./ProductList.css";
import { productService } from "../../../Services/ProductService";
import { ProductModel } from "../../../Models/ProductModel";
import { ProductCard } from "../ProductCard/ProductCard";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/useTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";

export function ProductList(): JSX.Element {
    useTitle("Northwind | Product List")
    const[products,setProducts] = useState<ProductModel[]>([]);

    useEffect(()=>{
        productService.getAllProducts()
            .then(dbProducts=> setProducts(dbProducts))
            .catch(err=> notify.error(err));
    },[])

    return (
        <div className="ProductList">
            {products.length ===0 && <Spinner/>}
            {products.map(p=> <ProductCard key={p.id} product={p}/>)}
        </div>
    );
}
