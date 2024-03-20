import { RegisterOptions } from "react-hook-form";

export class WorkerModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public title: string;
    public country: string;
    public city: string;
    public birthDate: string;
    public imageUrl: string;
    public image:File;

    public static firstNameValidation:RegisterOptions = {
        required: {value:true, message:"missing name."},
        minLength:{value:2, message:"name too short"},
        maxLength:{value:15, message:"Name too long."}
    };
    public static lastNameValidation:RegisterOptions = {
        required: {value:true, message:"missing name."},
        minLength:{value:2, message:"name too short"},
        maxLength:{value:15, message:"Name too long."}
    };
    public static titleValidation:RegisterOptions = {
        required: {value:true, message:"missing name."},
        minLength:{value:2, message:"name too short"},
        maxLength:{value:15, message:"Name too long."}
    };
    public static countryValidation:RegisterOptions = {
        required: {value:true, message:"missing name."},
        minLength:{value:2, message:"name too short"},
        maxLength:{value:15, message:"Name too long."}
    };
    public static cityValidation:RegisterOptions = {
        required: {value:true, message:"missing name."},
        minLength:{value:2, message:"name too short"},
        maxLength:{value:15, message:"Name too long."}
    };
    public static birthDateValidation:RegisterOptions = {
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
