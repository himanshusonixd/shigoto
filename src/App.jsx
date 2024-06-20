
import './App.css'
import Jobsection from './Components/Jobsection';
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'
import Navbar from './Components/Navbar'
import LocomotiveScroll from 'locomotive-scroll';
import Ourworksection from './Components/Ourworksection';
import ContactPage from './Components/ContactPage';
function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <main className='min-h-screen w-full  text-white bg-zinc-900 overflow-hidden'>
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    <Jobsection/>
    <Ourworksection/>
    <ContactPage/>
    




    </main>
      

    </>
  )
}

export default App
