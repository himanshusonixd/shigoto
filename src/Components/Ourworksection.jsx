export default function Ourworksection() {

    return <>
        <div className=" mt-20 w-full " id="ourwork">
            <div className="mt-5 flex justify-center flex-row  ">
                <div className="">
                    <h1 className="text-8xl font-bebasFont xs:px-4 ">Remote work that <br /> works for all.</h1>
                    <h2 className="mt-2 text-2xl text-[#818181] font-poppinsFont ">Centered around the work you do, not where you do it.</h2>
                </div>

            </div>

            <div className="statsSection GradientBg  mt-20 font-poppinsFont p-3 ">
                <h1 className="text-6xl">Work will never be the same.</h1>
                <div className="statcontainer gap-4 xs:flex-wrap sm:flex-wrap mt-12  items-center flex m-5 justify-around">
                    <div className="flex flex-col w-full ">
                        <span className="text-3xl text-red-900 font-semibold ">57%
                        </span>
                        <span className="mt-3">
                            expect to be in the office 10 days or less each month.
                        </span>
                    </div>
                    <div className="flex flex-col  w-full">
                        <span className="text-3xl text-red-900 font-semibold" >77%
                        </span>
                        <span className="mt-3">
                        of employees will embrace a flexible workstyle.
                        </span>
                    </div>
                    <div className="flex flex-col w-full ">
                        <span className="text-3xl text-red-900 font-semibold">97%
                        </span>
                        <span className="mt-3" >
                        want changes to make the office safer before they return.
                        </span>
                    </div>

                </div>
            </div>

            
        </div>


    </>


}