import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";

class ProductService {
	public getAllProducts(){
        const response = axios.get<ProductModel[]>(appConfig.productUrl);
        console.log(response);
    }
}

export const productService = new ProductService();
