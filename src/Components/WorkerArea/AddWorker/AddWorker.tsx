import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { WorkerModel } from "../../../Models/WorkersModel";
import { workerService } from "../../../Services/WorkersService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/useTitle";
import "./AddWorker.css";

export function AddWorker(): JSX.Element {
    useTitle("Northwind | Add Product")
    const {register,handleSubmit,formState} = useForm<WorkerModel>();
    const navigate = useNavigate();
    async function send(worker: WorkerModel){
        try{
        worker.image = (worker.image as unknown as FileList)[0]
        await workerService.addWorkers(worker);
        notify.success("worker has been added👏");
        navigate("/workers")
        } catch (err:any){
            notify.error(err);
        }
    }
    return (
        <div className="AddWorker">
			<form onSubmit={handleSubmit(send)}>
                <label>first Name:</label>
                <input type="text" {...register("firstName",WorkerModel.firstNameValidation)} />
                <span className="error">{formState.errors?.firstName?.message}</span>

                <label>LastName:</label>
                <input type="text" {...register("lastName",WorkerModel.lastNameValidation)}/>
                <span className="error">{formState.errors?.lastName?.message}</span>

                <label>city:</label>
                <input type="text" {...register("city",WorkerModel.cityValidation)}/>
                <span className="error">{formState.errors?.city?.message}</span>

                <label>title:</label>
                <input type="text" {...register("title",WorkerModel.titleValidation)}/>
                <span className="error">{formState.errors?.lastName?.message}</span>

                <label>birthdate:</label>
                <input type="text" {...register("birthDate",WorkerModel.birthDateValidation)}/>
                <span className="error">{formState.errors?.lastName?.message}</span>

                <label>country:</label>
                <input type="text" {...register("country",WorkerModel.countryValidation)}/>
                <span className="error">{formState.errors?.lastName?.message}</span>
                
                <label>Image:</label>
                <input type="file" {...register("image")}/>

                <button>Add</button>
            </form>
        </div>
    );
}
