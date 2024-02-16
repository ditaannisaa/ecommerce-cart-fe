import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isCartOpen: false,
    cartItems: []
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        modalCart(state, action) {
            state.isCartOpen = action.payload;
        },
        addItem(state, action) {
            if(state.cartItems?.length==0){
                let cart = {
                    id:action.payload.id,
                    quantity:1,
                    title:action.payload.title,
                    images:action.payload.images,
                    price:action.payload.price,
                    category:action.payload.category
                } 
                state.cartItems.push(cart); 
            }
            else{
                let check = false;
                state.cartItems?.map((item,key)=>{
                    if(item.id==action.payload.id){
                        state.cartItems[key].quantity++;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:1,
                        title:action.payload.title,
                        images:action.payload.images,
                        price:action.payload.price,
                        category:action.payload.category    
                    }
                    state.cartItems?.push(_cart);
                }
            }
            // return{
            //     ...state,
            //     numberCart:state.numberCart+1
            // }
            // const newItemId = action.payload.id;
            // let cart = {
            //     id:action.payload.id,
            //     quantity:1,
            //     name:action.payload.name,
            //     image:action.payload.image,
            //     price:action.payload.price
            // } 
            // const existingItem = state.cartItems.find(item => item.id === cart.id);

            // if (existingItem) {
            //     state.cartItems.map((item,key) =>
            //         item.quantity++)
            // } else {
            //     state.cartItems.push(cart);
            // }
        },


        removeItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },

        incrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
        },


        decrementItem(state, action) {
            state.cartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.quantity--;
                }
                return item;
            }).filter(item => item.quantity !== 0);
        }
    }
});


export const { modalCart, addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;