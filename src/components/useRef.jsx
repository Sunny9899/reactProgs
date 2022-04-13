import {useEffect, useRef,useState} from "react";

export const Ref=()=>{

const [fname,setFname]=useState("");
const prevname=useRef("");


useEffect(()=>{
    prevname.current=fname;

},[fname])


return (
    <div>

     <input placeholder="Enter Name" onChange={n=>setFname(n.target.value)}/>
     <p>Latest Updated Name: {fname}</p>
     <p ref={prevname}>Prev Name: {prevname.current}</p>
    </div>
);

}