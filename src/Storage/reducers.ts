import { ProductModel } from "../Models/ProductModel";
import { PayloadAction } from "@reduxjs/toolkit";
import { WorkerModel } from "../Models/WorkersModel";
// Init all products
export function initProducts(currentState: ProductModel[],
    action: PayloadAction<ProductModel[]>): ProductModel[] {
    return action.payload;
}
//add one product
export function addProduct(currentState: ProductModel[],
    action: PayloadAction<ProductModel>): ProductModel[] {
    //const productToAdd = action.payload; //take payload
    //const newState = [...currentState]; // duplicate current state
    //newState.push(productToAdd); // perform logic
    //return newState; // return current state
    return [...currentState, action.payload];
}

export function updateProduct(currentState: ProductModel[],
    action: PayloadAction<ProductModel>): ProductModel[] {
    return currentState.map(p => p.id === action.payload.id ? action.payload: p);
    //const newState= [...currentState];
    //const index = newState.findIndex(p=> p.id === action.payload.id);
    //if(index>=0) newState[index]= action.payload;
    //return newState;
}
export function deleteProduct(currentState: ProductModel[],
    action: PayloadAction<number>): ProductModel[] {
    return currentState.filter(p=> p.id !== action.payload);
    //const newState= [...currentState];
    //const index = newState.findIndex(p=> p.id === action.payload);
    //if(index>=0) newState[index] = action.payload;
    //return newState;
}


export function initWorker(currentState: WorkerModel[],
    action: PayloadAction<WorkerModel[]>): WorkerModel[] {
    return action.payload;
}
//add one product
export function addWorker(currentState: WorkerModel[],
    action: PayloadAction<WorkerModel>): WorkerModel[] {
    //const productToAdd = action.payload; //take payload
    //const newState = [...currentState]; // duplicate current state
    //newState.push(productToAdd); // perform logic
    //return newState; // return current state
    return [...currentState, action.payload];
}

export function updateWorker(currentState: WorkerModel[],
    action: PayloadAction<WorkerModel>): WorkerModel[] {
    return currentState.map(p => p.id === action.payload.id ? action.payload: p);
    //const newState= [...currentState];
    //const index = newState.findIndex(p=> p.id === action.payload.id);
    //if(index>=0) newState[index]= action.payload;
    //return newState;
}
export function deleteWorker(currentState: WorkerModel[],
    action: PayloadAction<number>): WorkerModel[] {
    return currentState.filter(p=> p.id !== action.payload);
    //const newState= [...currentState];
    //const index = newState.findIndex(p=> p.id === action.payload);
    //if(index>=0) newState[index] = action.payload;
    //return newState;
}

