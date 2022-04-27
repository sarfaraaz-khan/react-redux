import { createStore } from "redux";

// creating a reducer to manupulate the store

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return state;
};

// creating a store to hold the state of all app

const store = createStore(counterReducer);

//export the store

export default store;
