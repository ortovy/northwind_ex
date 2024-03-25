import axios from "axios";
import { UserModel } from "../Models/UserModel";
import { appConfig } from "../Utils/AppConfig";
import { jwtDecode } from "jwt-decode";
import { authActions, store } from "../Storage/store";
import { CredentialsModel } from "../Models/CredentialsModel";

class AuthService {

    public constructor(){
        const token = localStorage.getItem("token");
        if(token){
            const container = jwtDecode<{user:UserModel}>(token);
            const dbUser = container.user;
            store.dispatch(authActions.login(dbUser));
        } 
    }

	//Register
    public async register(user:UserModel): Promise<void>{
        const response = await axios.post<string>(appConfig.registerUrl, user);
        const token = response.data;
        localStorage.setItem("token",token)
        const container = jwtDecode<{user:UserModel}>(token);
        const dbUser = container.user;
        console.log(token)
        store.dispatch(authActions.register(dbUser));
    }
    public async login(credentials: CredentialsModel): Promise<void>{
        const response = await axios.post<string>(appConfig.loginUrl, credentials);
        const token = response.data;
        localStorage.setItem("token",token)
        const container = jwtDecode<{user:UserModel}>(token);
        const dbUser = container.user;
        store.dispatch(authActions.login(dbUser));
    }

    public logout(): void{
        store.dispatch(authActions.logout());
        localStorage.removeItemItem("token");
    }
}

export const authService = new AuthService();
