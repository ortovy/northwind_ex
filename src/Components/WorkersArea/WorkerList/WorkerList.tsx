import { useEffect, useState } from "react";
import "./WorkerList.css";
import { WorkerModel } from "../../../Models/WorkersModel";
import { workerService } from "../../../Services/WorkersService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/useTitle";
import { WorkerCard } from "../WorkerCard/WorkerCard";

export function WorkersList(): JSX.Element {
    useTitle("Northwind | Product List")
    const[products,setWorkers] = useState<WorkerModel[]>([]);

    useEffect(()=>{
        workerService.getAllWorkers()
            .then(dbProducts=> setWorkers(dbProducts))
            .catch(err=> notify.error(err));
    },[])

    return (
        <div className="WorkerList">
            {products.map(p=> <WorkerCard key={p.id} worker={p}/>)}
        </div>
    );
}
