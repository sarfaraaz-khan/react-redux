import React from "react";
import { useSelector } from "react-redux";
import "./Counter.css";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <div className="conatiner">
        <div className="head">
          <img src="https://images-eu.ssl-images-amazon.com/images/I/51iMGTJi6tL._SY300_SX300_QL70_FMwebp_.jpg" />
        </div>
        <div className="body">
          <button className="btn btn-danger" onClick={incrementHandler}>
            ➕
          </button>
          <h1>🛒{counter}</h1>

          <button className="btn btn-success" onClick={decrementHandler}>
            ➖
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
