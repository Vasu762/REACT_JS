import RootReducer from "./RootReducer";
import { configureStore } from "@reduxjs/toolkit";
import ProductSaga from "./ProductRedux/ProductSaga";
import createsagaMiddeleware from'redux-saga'

const sagaMiddlewere = createsagaMiddeleware()

const store = configureStore({
reducer:RootReducer,
middleware:() => [sagaMiddlewere]
})

sagaMiddlewere.run(ProductSaga)

export default store