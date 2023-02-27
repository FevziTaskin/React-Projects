import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
// import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that used to update store
// two arguments - state, action
// state - old state/state before update
// action - what happened / what update
// return updated or old state

import { createStore } from "redux";
import reducer from "./reducer";

// react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux";

// dispatch method - send actions to the store
// actions (objects) - must have type property  - what kind of action
// don't mutate the state - redux built on immutability (copy)

// initial store
// const initialStore = {
//   cart: cartItems,
//   total: 105,
//   amount: 5,
// };

// const store = createStore(() => {});
// const store = createStore(reducer, initialStore);
const store = createStore(
  reducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
