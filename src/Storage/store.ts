import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { WorkerModel } from "../Models/WorkersModel";
import { logger } from "./middlewares";
import { addProduct, deleteProduct, initProducts, updateProduct, initWorker, addWorker, updateWorker, deleteWorker, register, login, logout, } from "./reducers";
import { UserModel } from "../Models/UserModel";

export type AppState = {
    products: ProductModel[];
    workers: WorkerModel[];
    user: UserModel;

}

const productSlice = createSlice({
    name: "products",
    reducers: { initProducts, addProduct, updateProduct, deleteProduct },
    initialState: null
});
const authSlice = createSlice({
    name: "auth",
    reducers: { register, login, logout },
    initialState: null
});

const workersSlice = createSlice({
    name: "workers",
    reducers: { initWorker, addWorker, updateWorker, deleteWorker },
    initialState: null
});


export const actions = productSlice.actions;
export const workerActions = workersSlice.actions;
export const authActions = authSlice.actions;

export const store = configureStore<AppState>({
    reducer: {
        products: productSlice.reducer,
        workers: workersSlice.reducer,
        user: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) as any
});


//workers



