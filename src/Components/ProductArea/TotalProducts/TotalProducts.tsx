import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState, store } from "../../../Storage/store";
import "./TotalProducts.css";

export function TotalProducts(): JSX.Element {

    const count = useSelector<AppState, number>(state => state.products?.length);
    //const [count,setCount] = useState<number>(0);

    //useEffect(()=>{
    //    const unsubscribe = store.subscribe(()=>{
     //       setCount(store.getState().products?.length);
     //   });
    //    return () =>{
    //        unsubscribe();
    //    }
    //
    //},[])

    if(!count) return null;

    return (
        <div className="TotalProducts">
			<span>Total Products:{count}</span>
        </div>
    );
}
