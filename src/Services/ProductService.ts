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
    public async addProduct(product: ProductModel): Promise<void> {
        const options = {headers:{ "Content-Type":"multipart/form-data" }}; //send text and files
        const response = await axios.post<ProductModel>(appConfig.productUrl,product,options)
        const dbProduct = response.data;
        console.log(dbProduct);
    }
    public async updateProduct(product: ProductModel): Promise<void> {
        const options = {headers:{ "Content-Type":"multipart/form-data" }}; //send text and files
        const response = await axios.put<ProductModel>(appConfig.productUrl + product.id ,product,options)
        const dbProduct = response.data;
        console.log(dbProduct);
    }
    public async deleteProduct(id:number): Promise<void> {
        await axios.delete(appConfig.productUrl + id);
        console.log(id + "deleted...")
    }
}                           

export const productService = new ProductService();
