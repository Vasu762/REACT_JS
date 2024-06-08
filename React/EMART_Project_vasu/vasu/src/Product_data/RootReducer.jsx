import { combineReducers } from '@reduxjs/toolkit';
import reducer from './Redux/Reducer';
import ProductReducer from './ProductRedux/Product_Reducer';
import Wish_Reducer from './Redux/Wish_Reducer';


const RootReducer = combineReducers({
   reducer,
   Wish_Reducer,
   ProductReducer
})

export default RootReducer
