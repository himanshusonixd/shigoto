import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu from '../images/menu.png'
import close from '../images/close.png'
import { motion } from "framer-motion";


export default function Navbar() {
    const [isopen, setisopen] = useState(false);

    function toggleMenu() {

        setisopen(!isopen);

    }


    const [arrow, setarrow] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;


            // let deltaX = mouseX - window.innerWidth/2;
            // let deltaY = mouseY - window.innerHeight/2;

            // let angle = Math.atan2(deltaY, deltaX) *(180/Math.PI);


            // console.log(e,"mouse positon mae")
            // console.log(e.pageX , "page x")
            // console.log(e.pageY , "page y")

            setarrow(e.pageY)
        })
    })

    return <>
   

   

        <div className={`fixed w-full flex justify-between z-[999] py-8 px-8  items-center`}>
            <div>
                <span className=" ml-4 text-2xl sm:text-4xl xs:text-4xl md:text-4xl">Shigoto</span>
            </div>
            <div className="gap-10 flex xs:hidden sm:hidden md:hidden">
                {/* {["Services", "Our work ","About us","Contact us"].map((item,index)=>{
            return <a key={index}  className={`text-lg hover:cursor-pointer hover:text-slate-400 transition-all`}>{item}</a>
        })} */}
                <ul className="flex gap-8 font-poppinsFont">
                    <AnchorLink href="#Services">
                        <li><a className={`text-lg hover:cursor-pointer hover:text-slate-400 transition-all`}>Services</a></li>
                    </AnchorLink>
                    <AnchorLink href="#ourwork">
                        <li><a className={`text-lg hover:cursor-pointer hover:text-slate-400 transition-all`}>Our work </a></li>
                    </AnchorLink>
                    <AnchorLink href="#aboutus">
                        <li><a className={`text-lg hover:cursor-pointer hover:text-slate-400 transition-all`}>About us</a></li>
                    </AnchorLink>
                    <AnchorLink href="#contact">
                        <li><a className={`text-lg hover:cursor-pointer hover:text-slate-400 transition-all`}>Contact us</a></li>
                    </AnchorLink>





                </ul>
            </div>

            <div className="responsive-navbar xs:block sm:block md:block lg:hidden xl:hidden 2xl:hidden  ">
                <div onClick={toggleMenu} className='h-8 w-8  items-center justify-center hidden md:block sm:block xs:block   rounded-lg '>
                    <div className='transition-all ease-in-out
                duration-200'>
                        {isopen ? <img src={close} alt="" className="invert-[100]" /> : <img src={menu} alt="" className="invert-[100]" />}
                    </div>
                </div>

            </div>
            
           

            {/* 
            <div className="lg:hidden xl:hidden 2xl:hidden ">
                <div className="bg-red-700">

                </div>
            </div> */}
            
        </div>
        {isopen && <div className="relative top-28 mb-8 w-full text-wrap lg:hidden xl:hidden 2xl:hidden  ">
            <motion.div initial={{y:0}} animate={{y:10}} transition={{type:'spring', duration:0.8}} > 
        <div className='itemdiv items-center '>
                        
                        
                        <ul className='flex font-semibold justify-around  transition-all ease-in-out duration-300   '>
                        <AnchorLink href="#Services">
                        <li><a className={`text-2xl pr-3 hover:cursor-pointer hover:text-slate-400 transition-all`}>Services</a></li>
                    </AnchorLink>
                    <AnchorLink href="#ourwork">
                        <li><a className={`text-2xl pr-3 hover:cursor-pointer hover:text-slate-400 transition-all`}>Our work </a></li>
                    </AnchorLink>
                    <AnchorLink href="#aboutus">
                        <li><a className={`text-2xl pr-3 hover:cursor-pointer hover:text-slate-400 transition-all`}>About us</a></li>
                    </AnchorLink>
                    <AnchorLink href="#contact">
                        <li><a className={`text-2xl hover:cursor-pointer hover:text-slate-400 transition-all`}>Contact us</a></li>
                    </AnchorLink>
                            
                        </ul>
                        
                    </div>
             
        </motion.div> 

</div> }
        
      
    </>


}