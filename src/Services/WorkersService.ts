import axios from "axios";
import { WorkerModel } from "../Models/WorkersModel";
import { appConfig } from "../Utils/AppConfig";

class WorkerService {
	public async getAllWorkers(){
        const response = await axios.get<WorkerModel[]>(appConfig.workersUrl);
        const products = response.data;
        console.log(products);
        return products;
    }
    // public async getOneProduct(id:number): Promise<ProductModel>{
    //     const response = await axios.get<ProductModel>(appConfig.productUrl + id);
    //     const product = response.data;
    //     return product;
    // }
    // public async addProduct(product: ProductModel): Promise<void> {
    //     const options = {headers:{ "Content-Type":"multipart/form-data" }}; //send text and files
    //     const response = await axios.post<ProductModel>(appConfig.productUrl,product,options)
    //     const dbProduct = response.data;
    //     console.log(dbProduct);
    // }
    // public async updateProduct(product: ProductModel): Promise<void> {
    //     const options = {headers:{ "Content-Type":"multipart/form-data" }}; //send text and files
    //     const response = await axios.put<ProductModel>(appConfig.productUrl + product.id ,product,options)
    //     const dbProduct = response.data;
    //     console.log(dbProduct);
    // }
    // public async deleteProduct(id:number): Promise<void> {
    //     await axios.delete(appConfig.productUrl + id);
    //     console.log(id + "deleted...")
    // }
}                           

export const workerService = new WorkerService();
