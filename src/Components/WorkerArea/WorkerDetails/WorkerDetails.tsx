import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { WorkerModel } from "../../../Models/WorkersModel";
import { workerService } from "../../../Services/WorkersService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/useTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import "./WorkerDetails.css";

export function WorkerDetails(): JSX.Element {
    const[product, setWorker] = useState<WorkerModel>(null);
    
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.id;
    useEffect(()=>{
        workerService.getOneWorker(id)
        .then(dbProduct => setWorker(dbProduct))
        .catch(err=> notify.error(err));
    },[])
    useTitle("Northwind | "+ product?.firstName)
    async function deleteMe(){
        try{
        const sure = window.confirm("Delete?");
        if(!sure) return;
        await workerService.deleteWorks(id);
        notify.success("product has been deleted...")
        navigate("/products")
        } catch (err:any){
            notify.error(err);
        }
    }
    if(!product) return <Spinner/>
    return (
        <div className="WorkerDetails">
			
            <h1>Name:{product?.firstName}</h1>
            <h2>lastName:{product?.lastName}</h2>
            <h3>title:{product?.title}</h3>
            <h4>country:{product?.country}</h4>
            <h5>city:{product?.city}</h5>
            <h6>birthday:{product?.birthDate}</h6>
            <img src= {product?.imageUrl}/>
            <br></br>
            <NavLink to="/workers">Home</NavLink>
            <span> | </span>
            <NavLink to={"/workers/edit/" + product?.id}>Edit</NavLink>
            <span> | </span>
            <NavLink to="#" onClick={deleteMe} >Delete</NavLink>
        </div>
    );
}
