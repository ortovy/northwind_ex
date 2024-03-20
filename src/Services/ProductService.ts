import axios from "axios";
import { debugPort } from "process";
import { ProductModel } from "../Models/ProductModel";
import { actions, store } from "../Storage/store";
import { appConfig } from "../Utils/AppConfig";

class ProductService {
	public async getAllProducts(): Promise<ProductModel[]>{
        if(store.getState().products) return store.getState().products;

        const response = await axios.get<ProductModel[]>(appConfig.productUrl);
        const products = response.data;

        store.dispatch(actions.initProducts(products));

        return products;
    }
    public async getOneProduct(id:number): Promise<ProductModel>{
        let product = store.getState().products?.find((p: ProductModel)=> p.id === id );
        if (product) return product;
        const response = await axios.get<ProductModel>(appConfig.productUrl + id);
        product = response.data;
        return product;
    }
    public async addProduct(product: ProductModel): Promise<void> {
        const options = {headers:{ "Content-Type":"multipart/form-data" }}; //send text and files
        const response = await axios.post<ProductModel>(appConfig.productUrl,product,options)

        const dbProduct = response.data;
        store.dispatch(actions.addProduct(dbProduct))
    }
    public async updateProduct(product: ProductModel): Promise<void> {
        const options = {headers:{ "Content-Type":"multipart/form-data" }}; //send text and files
        const response = await axios.put<ProductModel>(appConfig.productUrl + product.id ,product,options)
        const dbProduct = response.data;
        store.dispatch(actions.updateProduct(dbProduct));
    }
    public async deleteProduct(id:number): Promise<void> {
        await axios.delete(appConfig.productUrl + id);
        store.dispatch(actions.deleteProduct(id));
    }
}                           

export const productService = new ProductService();
