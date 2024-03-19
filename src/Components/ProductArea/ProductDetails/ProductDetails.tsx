import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { ProductModel } from "../../../Models/ProductModel";
import { useEffect, useState } from "react";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/useTitle";



export function ProductDetails(): JSX.Element {
    const[product, setProduct] = useState<ProductModel>(null);
    
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.id;
    useEffect(()=>{
        productService.getOneProduct(id)
        .then(dbProduct => setProduct(dbProduct))
        .catch(err=> notify.error(err));
    },[])
    useTitle("Northwind | "+ product?.name)
    async function deleteMe(){
        try{
        const sure = window.confirm("Delete?");
        if(!sure) return;
        await productService.deleteProduct(id);
        notify.success("product has been deleted...")
        navigate("/products")
        } catch (err:any){
            notify.error(err);
        }
    }
    return (
        <div className="ProductDetails">
            <h1>Name:{product?.name}</h1>
            <h2>Name:{product?.price}</h2>
            <h3>Name:{product?.stock}</h3>
            <img src= {product?.imageUrl}/>
            <br></br>
            <NavLink to="/products">Home</NavLink>
            <span> | </span>
            <NavLink to={"/products/edit/" + product?.id}>Edit</NavLink>
            <span> | </span>
            <NavLink to="#" onClick={deleteMe} >Delete</NavLink>
        </div>
        

    );
}
