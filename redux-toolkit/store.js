import { configureStore } from "@reduxjs/toolkit";
import {combineReducers } from "redux"
import thunk from "redux-thunk"
import { inputsReducer } from "./reducers/inputsReducer";
import { addToWishListReducer } from "./reducers/addToWishListReducer";
import { addToCompareReducer } from "./reducers/addToCompareReducer";
import { currencyReducer } from "./reducers/currencyReducer";
import { gridReducer } from "./reducers/gridReducer";
import {agentReducer, singleAgentReducer, getProperties, getProperty, getProjects, getProject, getBlogs, getBlog} from './reducers/reducer'


const reducer = combineReducers({

    inputsReducer,
    addToWishListReducer,
    addToCompareReducer,
    currencyReducer,
    gridReducer,

    agents: agentReducer,
    agent: singleAgentReducer,
    properties:getProperties,
    property:getProperty,
    projects:getProjects,
    project:getProject,
    blogs: getBlogs,
    blog: getBlog
  
});

const middleware = [thunk]

const store = configureStore({

    reducer: reducer,

    middleware,

    devTools: process.env.NODE_ENV !== 'production',


})


export default store;