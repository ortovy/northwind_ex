import { useEffect, useState } from "react";
import "./ProductList.css";
import { productService } from "../../../Services/ProductService";
import { ProductModel } from "../../../Models/ProductModel";

export function ProductList(): JSX.Element {
    const[products,setProducts] = useState<ProductModel[]>([]);

    useEffect(()=>{
        productService.getAllProducts().then(dbProducts=> setProducts(dbProducts));
    },[])

    return (
        <div className="ProductList">
            {products.map(p=> <span key={p.id}>{p.name}⚾</span>)}
        </div>
    );
}
