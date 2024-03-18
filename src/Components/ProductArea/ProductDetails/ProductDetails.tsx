import { NavLink, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { ProductModel } from "../../../Models/ProductModel";
import { useEffect, useState } from "react";
import { productService } from "../../../Services/ProductService";



export function ProductDetails(): JSX.Element {
    const[product, setProduct] = useState<ProductModel>(null);

    const params = useParams();
    const id = +params.id;
    useEffect(()=>{
        productService.getOneProduct(id).then(dbProduct => setProduct(dbProduct));
    },[])
    return (
        <div className="ProductDetails">
            <h1>Name:{product?.name}</h1>
            <h2>Name:{product?.price}</h2>
            <h3>Name:{product?.stock}</h3>
            <img src= {product?.imageUrl}/>
            <br></br>
            <NavLink to="/products">Home</NavLink>
        </div>
        

    );
}
