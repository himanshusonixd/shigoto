import { motion } from 'framer-motion'
import logo from '../images/shigoto.png'

console.log(window.innerWidth,"inner widht")
export default function LandingPage(){

    return <>
        <div className='min-h-screen w-full' id='aboutus'>

       
        <div className=' flex flex-col  tracking-tighter leading-none  pt-20 ml-10 xs:ml-0 xs:p-4 xs:text-4xl xs:pt-[25vw] sm:pt-[20vw] font-bebasFont md:pt-[20vw]'>
            <h1 className="text-8xl  xs:text-6xl ">Unlock Your Career Potential </h1>
            <h1 className="text-8xl xs:text-6xl "> Explore Remote Work Opportunities with</h1>
            <h1 className="text-8xl  xs:text-6xl"></h1>
            <div className='flex'>  <div  className=' xs:w-[24vw] sm:w-[20vw] lg:w-[15vw] md:w-[15vw] w-[12vw] bg-red-500 rounded-2xl mr-2'>
                <img src={logo} className='h-full w-full object-contain invert' alt="" />
            </div>  
            <h1 className="text-8xl"> Shigoto!</h1>
            </div>
           
            
        </div>

        <div className='w-full border-[1px] border-zinc-700 mt-40'>

        </div>
        <div className='aboutsection m-4 '>
                <p className='font-poppinsFont text-justify text-lg'> <span className='text-red-900 font-semibold text-xl'>Shigoto</span> is your gateway to a world of remote opportunities. Our platform connects talented individuals with remote work options spanning diverse industries and skill sets. Whether you're a digital nomad, a stay-at-home parent, or simply seeking a flexible work arrangement, Shigoto empowers you to find meaningful employment from the comfort of your own space</p>
                <br />
                {/* <p className='font-poppinsFont text-justify text-lg'>Our platform is designed to streamline the job search process, providing a user-friendly interface where job seekers can explore a wide range of positions across various industries throughout <span className='text-red-900 font-semibold text-xl'>Japan</span></p> */}
        </div>
        </div>
    
    </>



}