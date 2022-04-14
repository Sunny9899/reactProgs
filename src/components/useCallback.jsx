import { useState, useCallback } from "react";

export const Callback = () => {
  let [num, setNum] = useState(0);

  let [col, setCol] = useState(false);

  function costly(x) {
    for (let i = 0; i < 1000000000; i++) {
      x += i;
    }
    return x;
  }

  function getClick() {
    setNum(num + 1);
  }

  const colorChange = {
    color: col === false ? "red" : "green",
  };

  //costly(num);

  useCallback(() => {
    costly(num);
  }, []); //This command when activated will instantaneously change color as well as update the count as compared to time it was taking to do same in before mentioned command

  //useCallback saves the whole function actually unlike useMEmo

  return (
    <div>
      <div>You clicked {num} times</div>
      <button onClick={getClick}>Click</button>

      <div style={colorChange}>Color Change</div>
      <button
        onClick={() => {
          col === false ? setCol(true) : setCol(false);
        }}
      >
        change
      </button>
    </div>
  );
};
