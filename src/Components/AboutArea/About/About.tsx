import { useTitle } from "../../../Utils/useTitle";
import { Tune } from "../Tune/Tune";
import "./About.css";

export default function About(): JSX.Element {
    useTitle("Northwind | About")
    return (
        <div className="About">
            <Tune/>
        </div>
    );
}
