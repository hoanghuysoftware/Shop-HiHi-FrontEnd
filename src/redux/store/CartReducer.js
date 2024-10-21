import { configureStore } from '@reduxjs/toolkit';
import cartStore from '../actions/CartAction';
import userStore from '../actions/UserAction';
import searchStore from '../actions/SearchAction';

export default configureStore({
    reducer: {
        cart: cartStore,
        user: userStore,
        search: searchStore,
    },
});
