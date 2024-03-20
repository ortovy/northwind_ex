import axios from "axios";
import { WorkerModel } from "../Models/WorkersModel";
import { store, workerActions } from "../Storage/store";
import { appConfig } from "../Utils/AppConfig";

class WorkerService {
	public async getAllWorkers(){
        if (store.getState().workers) return store.getState().workers

        const response = await axios.get<WorkerModel[]>(appConfig.workersUrl);
        const workers = response.data;

        store.dispatch(workerActions.initWorker(workers));
        
        return workers;
    }
public async addWorkers(worker: WorkerModel): Promise<void> {
        const options = {headers:{ "Content-Type":"multipart/form-data" }}; //send text and files
        const response = await axios.post<WorkerModel>(appConfig.workersUrl,worker,options)

        const dbProduct = response.data;
        store.dispatch(workerActions.addWorker(dbProduct))
    }
    public async getOneWorker(id:number): Promise<WorkerModel>{
        let worker = store.getState().workers?.find((p: WorkerModel)=> p.id === id );
        if (worker) return worker;
        const response = await axios.get<WorkerModel>(appConfig.productUrl + id);
        worker = response.data;
        return worker;
    }
    public async updateWorkers(worker: WorkerModel): Promise<void> {
        const options = {headers:{ "Content-Type":"multipart/form-data" }}; //send text and files
        const response = await axios.put<WorkerModel>(appConfig.workersUrl + worker.id ,worker,options)
        const dbProduct = response.data;
        store.dispatch(workerActions.updateWorker(dbProduct));
    }
    public async deleteWorks(id:number): Promise<void> {
        await axios.delete(appConfig.workersUrl + id);
        store.dispatch(workerActions.deleteWorker(id));
    }
}                           

export const workerService = new WorkerService();
