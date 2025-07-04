import { Divide } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Hero3 = () => {
 
 
 
  const [counter, setCounter] = useState(1);
  const limit = 1100; // Yahan par apni limit set karein


  useEffect(() => {
    if (counter < limit) { 
      const interval = setInterval(() => { 
        setCounter(prevCounter => prevCounter + 5);
      }, 10); // Har 10ms me counter badhega
  
      return () => clearInterval(interval); // Cleanup function
    }
  }, [counter]);




  const [tounter, setTounter] = useState(1);
  const last = 900; // Yahan par apni limit set karein

  useEffect(() => {
    if (tounter < last) {
      const interval = setInterval(() => {
        setTounter(prevTounter => (prevTounter < last ? prevTounter + 3 : prevTounter));
      }, 10); // 10ms me number increase hoga

      return () => clearInterval(interval); // Cleanup function to clear interval
    }
  }, [tounter]);


 


const [first, setFirst] = useState(1);
const end=300;

useEffect(() => {
  if(first<end)
  {
    const interval = setInterval(()=>{
      setFirst (prevFirst=>(prevFirst<end? prevFirst+1: prevFirst));
    },10 );  

  return () => clearInterval (interval);
    
  }
}, [first])







 
  return (
   <div className="flex justify-between items-center mt-20  ml-20 shadow-2xs">


  <div className="gap-3">
    <h1 className="text-5xl font-extralight">{counter}</h1>
    <h2 className="text-2xl font-sans">No. of  Users </h2>
  </div>




  <div className="">


<h1 className="text-5xl font-extralight"> {tounter} </h1>
<h2 className='text-2xl  font-sans'>Total Trip  Complete</h2> 
  
   </div>


<div  className="mr-10 gap-3">

<h1 className="text-5xl font-extralight">{first}</h1>
<h2 className="text-2xl font-sans "> Monthly Subcription</h2>


</div>










   </div>
  );
};

export default Hero3;
