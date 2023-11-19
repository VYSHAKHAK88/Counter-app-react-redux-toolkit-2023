import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice";

 export const store = configureStore ({
    reducer:{
        // we can define different reducer as key-value pair
        counterReducer
    }
 })
