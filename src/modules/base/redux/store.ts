import { compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ReducerRegistry from "./ReducerRegistry";
import "./reducer";
import MiddlewareRegistry from "./MiddlewareRegistry";
import { composeWithDevTools } from "redux-devtools-extension";

/////////////////////////////////////////////////////////////////////////////////////////////

// console.log(typeof compose);
// const composeEnhancers = composeWithDevTools({
//   serialize: {
//     symbol: true,
//     function: (key: any, value: any) => {
//       if (typeof value === "symbol") return String(value);
//       return value;
//     },
//   },
// });

// Normally, using symbol as action type will cause devtool show <UNDEFINED> action type name because symbol is not serializable
// To display at least description of symbol for knowing what action got called purpose, we can change some options (like below) in redux devtool

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // actionSanitizer: (action: any) => {
        //   return {
        //     ...action,
        //     // Show description of symbol for action type name
        //     // It will be something like Symbol(LOGIN):
        //     // type: action.type.toString(),

        //     // To show only action type name (just LOGIN), we need slice
        //     type: action.type.toString().slice(7, -1),
        //   };
        // },
        serialize: true,
      })
    : compose;
/////////////////////////////////////////////////////////////////////////////////////////////

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "profile"],
};

const reducers = ReducerRegistry.combineReducers(persistConfig);

MiddlewareRegistry.register(thunk);
const middleware = MiddlewareRegistry.applyMiddleware();
const store = createStore(reducers, composeEnhancers(middleware));
const persistor = persistStore(store, {}, () => {});

export { persistor };

export type IRootState = ReturnType<typeof store.getState>;
export default store;
