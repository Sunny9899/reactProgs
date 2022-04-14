import { useState, useMemo} from "react";

export const Memo=()=>{

    let [num,setNum]=useState(0);
   
    let [col,setCol]=useState(false);

    function costly(n){
      for(var i=0;i<1000000000;i++){
        n+=1;
      }
      return n;
    }

    const inc=()=>{
      setNum((n)=>n+1)
    }

    const colorChange={
      color: col===false ? "red" : "green"
    }

    costly(num) 
    
    //  useMemo(()=>{costly(num)},[num]); //This command when activated will instantaneously change color as compared to time it was taking to do same in before mentioned command

    return (
        <div>

        <div>The num: {num}</div>
        <button onClick={inc}>Increment</button>

        <div style={colorChange}>Color Change</div>
        <button onClick={()=>{col===false ? setCol(true) : setCol(false)}}>change</button>
        </div>
    );
    
    }