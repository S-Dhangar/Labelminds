import {useState} from "react";
export default function Task() {
  const [arr,setArr]= useState([]);
  const [show,setShow]= useState(false);
  const changeVal=(e,i)=>{
    let newarr=[...arr];
    newarr[i]=e.target.value;
    setArr(newarr);
    }
  const addField=()=>{
    
    setArr([...arr,""]);
    }
  return (
    <div className="task" style={{height:"1000px",paddingTop:"100px"}}>
      <button onClick={addField}>Add filed</button>
      { 
      arr.map((e,ind)=>{
       return <input value={e} onChange={(e)=>changeVal(e,ind)} key={ind}/>

      })
      }
      <button onClick={()=>setShow(true)}>Show Data</button>
      {
        show && arr.map((e,ind)=>{
       return <div>{e} </div>

      })
      }
    </div>
  );
}

