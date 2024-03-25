import { useTitle } from "../../../Utils/useTitle";
import { TotalCatagories } from "../../CatagoryArea/TotalCatagories/TotalCatagories";
import { Tune } from "../Tune/Tune";
import "./About.css";

export default function About(): JSX.Element {
    useTitle("Northwind | About")
    return (
        <div className="About">
            <Tune/>
            <TotalCatagories/>
        </div>
    );
}
