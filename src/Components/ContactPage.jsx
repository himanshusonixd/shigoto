export default function ContactPage(){


    return<>

    <div className="h-screen w-full flex justify-center items-center mt-10 font-poppinsFont" id="contact">

   
    <div className=" p-4 w-[80vw] xs:w-[90vw] sm:w-[90vw]  bg-slate-800 rounded-lg  text-center">
        <h1 className="text-3xl font-semibold">Contact Us</h1>

        <form   action="https://formspree.io/f/xpzvgkre"
  method="POST" className="flex flex-col gap-8  mt-20 items-center justify-center text-black" >
        <input type="text" name="Name" required placeholder="Name" className="w-[30vw] xs:w-full sm:w-full p-1 rounded-md" />
        <input type="email" name="Email" required placeholder="Email"  className="w-[30vw] xs:w-full p-1 rounded-md sm:w-full"  />
        <textarea name="message" required  placeholder="Write your message her" id=""  className="w-[30vw] rounded-md  sm:w-full xs:w-full p-1" ></textarea>
        <button type="submit"  className="btn">Send</button>
        </form>
    </div>
    </div>
    
    </>


}