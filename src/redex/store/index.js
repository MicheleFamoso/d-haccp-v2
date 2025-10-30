import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../redicers";

const store =  configureStore({
    reducer: mainReducer
})

export default store
