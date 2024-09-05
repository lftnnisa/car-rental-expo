import { configureStore } from "@reduxjs/toolkit"
import reactotron from "../ReactotronConfig"
import carSlice from "./reducers/car/carSlice"
import loginSlice from "./reducers/auth/loginSlice"
import carDetailsSlice from './reducers/car/carDetailsSlice'
// npm i @reduxjs/toolkit react-redux

export const store = configureStore({
    reducer: {
        car: carSlice,
        carDetails: carDetailsSlice,
        user: loginSlice,
    },
    enhancers: 
        (getDefaultEnhancers) => 
            __DEV__ ? getDefaultEnhancers()
        .concat(reactotron.createEnhancer()) : getDefaultEnhancers()
})

