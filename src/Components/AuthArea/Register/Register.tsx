import { useForm } from "react-hook-form";
import "./Register.css";
import { UserModel } from "../../../Models/UserModel";
import { authService } from "../../../Services/AuthService";
import { notify } from "../../../Utils/Notify";
import { Navigate, useNavigate } from "react-router-dom";

export function Register(): JSX.Element {

    const{register,handleSubmit} = useForm<UserModel>();
    const navigate = useNavigate();
    async function send(user:UserModel){
        try{
         await authService.register(user);
         notify.success("welcome" + user.firstName + "!");
         navigate("/home")   
        } catch(err:any){
            notify.error(err);
        }
        console.log();
    }

    return (
        <div className="Register">
			<form onSubmit={handleSubmit(send)}>

                <label>First name</label>
                <input type="text"{...register("firstName")}/>

                <label>Last name</label>
                <input type="text"{...register("lastName")}/>

                <label>Email</label>
                <input type="email"{...register("email")}/>

                <label>password</label>
                <input type="password"{...register("password")}/>

                <button>Register</button>
            </form>
        </div>
    );
}
