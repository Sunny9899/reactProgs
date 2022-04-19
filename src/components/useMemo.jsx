import { useState, useMemo} from "react";

export const Memo=()=>{

    let [num,setNum]=useState(0);
   
    let [col,setCol]=useState(false);

    const inc=()=>{
      setNum(num+1);
    }

    const colorChange={
      color: col===false ? "red" : "green"
    }
    
    const costlyEvenOddCheck=  useMemo(()=>{
    //  const costlyEvenOddCheck=()=>{ //Difference in between code render can be noted when useMemo is not used.
      for(var i=0;i<1000000000;i++){}
      return num%2===0;
    //  }
    },[num]); 

    return (
        <div>

        <div>The num: {num}.</div>
        <div> Displayed num is {costlyEvenOddCheck /*()*/ ?"Even":"Odd"}</div>
        <button onClick={inc}>Increment</button>
         <br/>
         <br/>
        <div style={colorChange}>Color Change</div>
        <div>{col===false ? "Red" : "Green"} is the color.</div>
        <button onClick={()=>{col===false ? setCol(true) : setCol(false)}}>change</button>
        </div>
    );
    
    }