import { RegisterOptions } from "react-hook-form";

export class ProductModel {
    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
    public image: File;

    public static nameValidation:RegisterOptions = {
        required: {value:true, message:"missing name."},
        minLength:{value:2, message:"name too short"},
        maxLength:{value:15, message:"Name too long."}
    };
    public static stockValidation:RegisterOptions = {
        required: {value:true, message:"missingStock."},
        min:{value:0,message:"number too small"},
        max:{value:1000,message:"number too high"}
    };
    public static priceValidation:RegisterOptions = {
        required: {value:true, message:"missing name."},
        min:{value:0,message:"number too small"},
        max:{value:1000,message:"number too high"}
    };

}
