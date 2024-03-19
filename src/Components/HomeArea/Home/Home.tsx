import "./Home.css";
import pizza from"../../../Assets/Images/pizza-maadanot.jpg"
import { useEffect } from "react";
import { useTitle } from "../../../Utils/useTitle";
export function Home(): JSX.Element {

useTitle("Northwind | Home")

    return (
        <div className="Home">
			<img src={pizza}/>
        </div>
    );
}
