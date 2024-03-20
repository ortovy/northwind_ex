import { configureStore, Dispatch, PayloadAction } from "@reduxjs/toolkit";



export const logger = (store:ReturnType<typeof configureStore>) =>(next:Dispatch) =>(action: PayloadAction) =>{
    const result = next(action);
            //state changed
            console.log("Something Changed...",action);
            return result;
}

//will be invoked automatically on every dispatch
//export function logger(store: ReturnType<typeof configureStore>) {
//    return function (next:Dispatch){
//        return function(action:PayloadAction){
//            //state not changed yet
//            const result = next(action);
//            //state changed
//            console.log("Something Changed...",action);
//            return result;
//        }
//    }
//}