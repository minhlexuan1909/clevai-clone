import { persistCombineReducers } from "redux-persist";

class ReducerRegistry {
  _elements;

  constructor() {
    this._elements = {};
  }

  combineReducers(persistConfig) {
    return persistCombineReducers(persistConfig, {
      ...this._elements,
    });
  }

  register(name, reducer) {
    this._elements[name] = reducer;
  }
}

export default new ReducerRegistry();
