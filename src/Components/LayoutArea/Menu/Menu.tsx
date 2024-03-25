import { NavLink } from "react-router-dom";
import { TotalProducts } from "../../ProductArea/TotalProducts/TotalProducts";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink end to="/products">Products</NavLink>
            <NavLink end to="/products/new" >AddProduct </NavLink>
            <NavLink end to="/workers/new" >AddWorkers </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink end to="/workers">Workers</NavLink>
            <NavLink end to="/contact-us">Contact us</NavLink>
            <TotalProducts/>
        </div>
    );
}
