import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/useTitle";
import "./EditProduct.css";

export function EditProduct(): JSX.Element {

    useTitle("Northwind | edit")
    const {register,handleSubmit, formState, setValue, watch } = useForm<ProductModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.id

    useEffect(()=>{
       productService.getOneProduct(id).then(dbProduct=>{
        setValue("name",dbProduct.name);
        setValue("price",dbProduct.price);
        setValue("stock",dbProduct.stock);
        setValue("imageUrl",dbProduct.imageUrl);
       }).catch(err=>notify.error(err))
    },[])

    async function send(product: ProductModel){
        try{
        product.id=id;
        product.image = (product.image as unknown as FileList)[0]
        await productService.updateProduct(product);
        notify.success("Product has been edited!")
        navigate("/products")
        } catch (err:any){
            notify.error(err);
        }
    }
        
    return (
        <div className="EditProduct">
			<form onSubmit={handleSubmit(send)}>
                <label>Name:</label>
                <input type="text" {...register("name",ProductModel.nameValidation)} />
                <span className="error">{formState.errors?.name?.message}</span>
                <label>Price:</label>

                <input type="number" step="0.01" {...register("price",ProductModel.priceValidation)}/>
                <span className="error">{formState.errors?.price?.message}</span>

                <label>Stock:</label>
                <input type="number" {...register("stock",ProductModel.stockValidation)}/>
                <span className="error">{formState.errors?.stock?.message}</span>
                
                <label>Image:</label>
                <input type="file" {...register("image")}/>
                <img src ={watch("imageUrl")} />
                <button>Update</button>
            </form>
        </div>
    );
}
