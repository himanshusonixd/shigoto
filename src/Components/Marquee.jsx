import { motion } from "framer-motion"

export default function Marquee(){
    
    return <> 
        <div className="h-[70vh] xs:h-full sm:h-full w-screen">

       
        <div className="w-full mt-[20vh] bg-slate-800 h-[50vh] md:h-[35vh]  sm:h-[35vh] xs:h-[20vh]  flex items-center justify-center rounded-t-xl  ">

            <div className="border-t-2 border-b-2 border-zinc-600 flex  whitespace-nowrap overflow-hidden text-9xl  ">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity , ease: "linear" , duration:12}} className="text-[12vw] leading-none tracking-tighter uppercase pr-10">Global Careers at Your Fingertips : Embrace Remote Work with Shigoto</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity , ease: "linear" , duration:12}} className="text-[12vw] leading-none tracking-tighter uppercase pr-10">Global Careers at Your Fingertips : Embrace Remote Work with Shigoto</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity , ease: "linear" , duration:12}} className="text-[12vw] leading-none tracking-tighter uppercase pr-10">Global Careers at Your Fingertips : Embrace Remote Work with Shigoto</motion.h1>
           
        
            </div>
          
            




        </div>
        </div>
    
    </>

}