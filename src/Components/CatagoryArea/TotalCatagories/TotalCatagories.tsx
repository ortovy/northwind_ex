import { useEffect, useState } from "react";
import "./TotalCatagories.css";
import { catagoryService } from "../../../Services/CatagoryService";
import { notify } from "../../../Utils/Notify";

export function TotalCatagories(): JSX.Element {
    const [count,setCount] = useState<number>();


    useEffect(()=>{
        catagoryService.getTotalCategories()
        .then(dbCount =>setCount(dbCount))
        .catch(err=>notify.error(err));
    },[])

    return (
        <div className="TotalCatagories">
            <span> total Catagories: {count}</span>
        </div>
    );
}
