import axios from "axios";

class Interceptors {
	public registerInterceptors():void{
        axios.interceptors.request.use(requestObject=>{
            const token = localStorage.getItem("token");
            if(token){
                requestObject.headers.Authorization = "bearer " + token;
            }
            return requestObject;
        })
    }
}

export const interceptors = new Interceptors();