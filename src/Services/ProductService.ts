import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";

class ProductService {
	public async getAllProducts(){
        const response = await axios.get<ProductModel[]>(appConfig.productUrl);
        const products = response.data;
        console.log(products);
        return products;
    }
    public async getOneProduct(id:number): Promise<ProductModel>{
        const response = await axios.get<ProductModel>(appConfig.productUrl + id);
        const product = response.data;
        return product;
    }
}

export const productService = new ProductService();
