import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./AuthReducers";

const store=configureStore({
    reducer: {
        auth: AuthReducer,
    },
    });

    export default store;