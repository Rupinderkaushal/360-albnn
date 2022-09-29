import { configureStore} from "@reduxjs/toolkit";
import hamSlice from "./slices/hamSlice";
import userSlice from "./slices/userSlice";

const Store = configureStore({
    reducer:{
        user:userSlice,
        ham:hamSlice,
    }
});

export default Store;
