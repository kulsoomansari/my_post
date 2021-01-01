import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Slice";

const store = configureStore({
    reducer: postReducer
})
export default store