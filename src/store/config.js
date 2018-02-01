import { 
  createStore,
  applyMiddleware
 } from "redux";
 import thunkMiddleware from "redux-thunk";
 import { createLogger } from "redux-logger";
 import rooReducer from '../reducers';

 const loggerMiddleware = createLogger();

 export default function configureStore(preloadedState) {
   return createStore(
    rooReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )   
   );
 }