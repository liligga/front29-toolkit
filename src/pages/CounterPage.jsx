import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counterSlice";

const CounterPage = () => {
  const [val, setVal] = useState(1);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // dispatch(counterActions.increment());
    dispatch(counterActions.incrementCounter(Number(val)));
  };

  return (
    <div className="w-full flex flex-col justify-center gap-3">
      <span className="text-2xl col-span-full">Счетчик</span>
      <input type="number" value={val} onChange={(e) => setVal(e.target.value)} />
      <div className="w-full flex justify-center items-center gap-4">
        <button className="w-8 bg-slate-300 px-2 py-1 rounded-md">-</button>
        <span>{count}</span>
        <button
          className="w-8 bg-slate-300 px-2 py-1 rounded-md"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
