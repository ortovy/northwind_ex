import { NavLink } from "react-router-dom";
import { WorkerModel } from "../../../Models/WorkersModel";
import "./WorkerCard.css";
type WorkersCardProps = {
    worker: WorkerModel;

};
export function WorkerCard(props: WorkersCardProps): JSX.Element {
    return (
        <div className="WorkerCard">
			<div>
                <span>{ props.worker.firstName} </span>
                <span>{ props.worker.lastName} </span>
                <span>{ props.worker.city} </span>
                <span>{ props.worker.title} </span>
                <span>{ props.worker.firstName} </span>
            </div>

            <div>
            <NavLink to={"/workers/details/" + props.worker.id}>
                <img src={props.worker.imageUrl}/>
            </NavLink>
            </div>
        </div>
    );
}
