import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice'
import cartSlice from './slice/cartSlice';


const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});


export default store;