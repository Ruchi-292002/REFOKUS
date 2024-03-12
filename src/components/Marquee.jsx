
import { motion } from 'framer-motion'
import React from 'react'

function Marquee({imageurls, direction}) {

  return (
    <div className='flex w-full overflow-hidden'>
      <motion.div initial={{x: direction === "left" ? "0" : "-100%"}} animate={{x: direction === "left" ? "-100%" : "0"}} transition={{repeat: Infinity,ease: "linear", duration: 10}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imageurls.map((url,index) => ( 
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
      <motion.div initial={{x: direction === "left" ? "0" : "-100%"}} animate={{x: direction === "left" ? "-100%" : "0"}} transition={{repeat: Infinity,ease: "linear", duration: 10}}  className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imageurls.map((url,index) => ( 
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee




















// import { motion } from 'framer-motion'
// import React from 'react'

// function Marquee({imageurls}) {
//   return (
//     <div className='flex w-full  overflow-hidden'>
      
//       <motion.div initial ={{x:"0"}} animate={{x:"-100%"}}  className='flex flex-shrink-0 gap-40 py-10 pr-40'>
//       {imageurls.map((url,index) => (<img key={index} src={url} className="w-[5vw] flex-shrink-0" />
//       )) }
//       </motion.div>

//       <motion.div className='flex flex-shrink-0 gap-40 py-10 pr-40'>
//       {imageurls.map((url,index) =>( <img key={index} src={url} className=" flex-shrink-0" />
//       ) )}</motion.div>
      
      
      
      
//     </div>
//   )
// }

// export default Marquee
