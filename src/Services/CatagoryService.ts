import axios from "axios";
import { CatagoryModel } from "../Models/CatagoryModel";
import { appConfig } from "../Utils/AppConfig";

class CatagoryService {
	public async getTotalCategories():Promise<number>{
        const response = await axios.get<CatagoryModel[]>(appConfig.categoriesUrl);
        const categories = response.data;
        const count = categories.length;
        return count;
    }
}

export const catagoryService = new CatagoryService();
