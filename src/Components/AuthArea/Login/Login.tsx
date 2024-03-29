import { useForm } from "react-hook-form";
import "./Login.css";
import { CredentialsModel } from "../../../Models/CredentialsModel";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../Services/AuthService";
import { notify } from "../../../Utils/Notify";

export function Login(): JSX.Element {

    const{register,handleSubmit} = useForm<CredentialsModel>();
    const navigate = useNavigate();
    async function send(credentials:CredentialsModel){
        try{
         await authService.login(credentials);
         notify.success("welcome Back");
         navigate("/home")   
        } catch(err:any){
            notify.error(err);
        }
        console.log();
    }



    return (
        <div className="Login">
            <form onSubmit={handleSubmit(send)}>

                <label>Email</label>
                <input type="email"{...register("email")} />

                <label>password</label>
                <input type="password"{...register("password")} />

                <button>Register</button>
            </form>
        </div>
    );
}
