import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink end to="/products">Products</NavLink>
            <NavLink end to="/products/new" >AddProduct </NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
}
