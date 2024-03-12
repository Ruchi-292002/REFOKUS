import React, { useState } from 'react'
import Productt from './Productt';
import { motion } from 'framer-motion';

function Productss() {
    var products = [
        {title: "arquitle", description: "Arqu Executive and its I dont know what it is but still I am writting this si its ok but its nooo. Yehh whooo", 
        live:true, 
        case:false
      },
        {title: "YIR 2023", description: "Arqu Executive and its I dont know what it is but still I am writting this si its ok but its nooo. Yehh whooo", 
        live:true, 
        case:true},

        {title: "Yahoo", description: "Arqu Executive and its I dont know what it is but still I am writting this si its ok but its nooo. Yehh whooo", 
        live:true, 
        case:true
      },
    ];

   const [pos, setPos] = useState(0);

   const mover =(val)=>{
     setPos(val*23);
   }


  return (
    <div className='mt-32 relative'>
    {products.map((val,index)=> 
    <Productt key={index} val={val}  mover={mover} count={index}/>)}
      <div className='absolute top-0 w-full h-full pointer-events-none '>
         <motion.div 
         initial ={{y:pos, x: "-50%"}}
         animate={{y: pos+`rem`}}
         transition={{ease:[0.76,0,0.24,1],duration:.6}}
       className='window absolute w-[32rem] h-[23rem] bg-white left-[44%] -translate-x-[50%] overflow-hidden'>
           <motion.div 
              animate={{y:-pos + `rem`}}
              transition={{ease:[0.76,0,0.24,1],duration:.5}}
           className='w-full h-full bg-sky-100 '></motion.div>
           <motion.div 
              animate={{y:-pos + `rem`}}
              transition={{ease:[0.76,0,0.24,1],duration:.5}}
           className='w-full h-full bg-sky-200 '></motion.div>
           <motion.div 
              animate={{y:-pos + `rem`}}
              transition={{ease:[0.76,0,0.24,1],duration:.5}}
           
           className='w-full h-full bg-sky-300 '></motion.div>
         </motion.div>
      </div>

      
    </div>
  )
}

export default Productss;
