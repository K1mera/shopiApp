import { configureStore } from "@reduxjs/toolkit";

import { authSlice, orderSlice, shopSlice } from "./slices";


export const store = configureStore({
    reducer: {
        shop: shopSlice.reducer,
        orders: orderSlice.reducer,
        auth: authSlice.reducer,
    },
}) 
 
