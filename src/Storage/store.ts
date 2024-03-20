import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { WorkerModel } from "../Models/WorkersModel";
import { logger } from "./middlewares";
import { addProduct, deleteProduct, initProducts, updateProduct,initWorker, addWorker, updateWorker, deleteWorker, } from "./reducers";

export type AppState = {
    products:ProductModel[];
    workers:WorkerModel[];
    
}

const productSlice = createSlice({
    name: "products",
    reducers: {initProducts,addProduct,updateProduct,deleteProduct},
    initialState:null
});

const workersSlice = createSlice({
    name: "workers",
    reducers: {initWorker,addWorker,updateWorker,deleteWorker},
    initialState:null
});


export const actions = productSlice.actions;


export const workerActions = workersSlice.actions;

export const store = configureStore<AppState>({
    reducer: {products: productSlice.reducer, workers: workersSlice.reducer},
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger) as any
});


//workers



