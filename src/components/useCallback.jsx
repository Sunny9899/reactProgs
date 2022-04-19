import { useState, useCallback } from "react";

export const Callback = () => {
  const[num,setNum]=useState(0);

  const [age,setAge]=useState(10);
 
  const increaseNum=useCallback(()=>{
    setNum(num+1);
  },[num]);

  const increaseAge=useCallback(()=>{
    setAge(age+10);
  },[age]);

  return (
    <div>
        <div>The Num is: {num}</div>
        <button onClick={increaseNum}>Increase Num</button>
        <br/>
        <br/>
        <div>The Age is: {age}</div>
        <button onClick={increaseAge}>Increase Age</button>        
    </div>
  );
};
