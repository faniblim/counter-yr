import React, { useState } from "react";
import "./counter.css";

type PropsType = {
  count: number;
  maxValue: number;
};

export const Counter = () => {
  let [count, setCount] = useState(0);
  let maxValue = 5;

  const onPlus = () => {
    if (count <= 4) {
      setCount(count + 1);
    } else {
      return;
    }
  };

  const onReset = () => {
    setCount((count = 0));
  };

  function Display(props: PropsType) {
    let displayClass =
      props.count === props.maxValue ? "display max-value" : "display";
    return <div className={displayClass}>{props.count}</div>;
  }

  return (
    <div className="tablo">
      <div className="number">
        <Display count={count} maxValue={maxValue} />
      </div>

      <div className="panel">
        <button className="inc" onClick={onPlus}>
          inc
        </button>
        <button className="reset" onClick={onReset}>
          reset
        </button>
      </div>
    </div>
  );
};
