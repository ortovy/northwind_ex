import { ProductModel } from "../Models/ProductModel";
import { PayloadAction } from "@reduxjs/toolkit";
import { WorkerModel } from "../Models/WorkersModel";
import { UserModel } from "../Models/UserModel";
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


//------------------------Workers---------------------------------

export function initWorker(currentState: WorkerModel[],
    action: PayloadAction<WorkerModel[]>): WorkerModel[] {
    return action.payload;
}
//add one worker
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

//------------------------Auth---------------------------------

export function register(currentState: UserModel[],
    action:PayloadAction<UserModel>):UserModel {
    return action.payload;
    }
export function login(currentState: UserModel[],
    action:PayloadAction<UserModel>):UserModel {
    return action.payload;
    }
export function logout(currentState: UserModel[],
    action:PayloadAction<UserModel>):UserModel {
    return null;
    }