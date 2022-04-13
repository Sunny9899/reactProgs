import { useState, useMemo, useEffect} from "react";

export const Memo=()=>{

      const [num,setNum]=useState(1);
      
      const costly=useMemo(()=>{
        calc(num);
      },[num])

      function calc(n){
        for(var i=0;i<10000000;i++){}
        return (n*2);
      }
      //console.log(costly);
    return (
        <div>
          <input placeholder="Enter Number" onChange={n=>{setNum(n.target.value)}}/>
          <div>Input Number: {num}</div>
          <div>Number after function execution: {costly} </div>
          <p>First time loading will take some time, but second time loading will be faster than first load</p>
        </div>
    );
    
    }