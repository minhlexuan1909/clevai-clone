import ReducerRegistry from "./ReducerRegistry";
import {TAction} from "../types/redux";

const initState = {
  id: 1
};

ReducerRegistry.register("base", (state = initState, action: TAction) => {
  switch (action.type) {
    default:
      return state;
  }
});
