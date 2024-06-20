import { useEffect, useState } from "react";

import { fetchData, options } from "../utils/fetchData";
import { data } from "autoprefixer";



export default function Jobsection() {
    const [apiData, setApiData] = useState([])

    // let api = "https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api"


    // const fetchapi = async(url)=>{

    //     try {
    //         const response = await fetch(url)
    //         const data = response.json();

    //         console.log(data)
    //         console.log(data.data)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

    // useEffect(() => {

    //     fetch(api).then((result) => {
    //         result.json().then((response) => {
    //             console.log(response, "final respoise")


    //             setApiData(response)
    //         })
    //     })

    // }, [])

    // console.log(apiData, "api data")
    // console.log(typeof (apiData), "type of api data")
    // console.log((apiData).length, "length of ")
    // console.log(apiData.data, " is this real data ")
    // console.log(typeof (apiData.data), " type of is this real data ")
    // const realData = apiData.data

    // const realData2 = { ...realData }
    // console.log(realData2, "real data2")
    // console.log(typeof (realData2), "type of real data 2")



    async function HandleSearch() {

        const jobdata = await fetchData("https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api", options)

        console.log(jobdata)
        setApiData(jobdata)

    }



    console.log(apiData, "api data")
    console.log(typeof (apiData), "api data")


    let propertyValues;
    let newarray;
    // let entries;
    // let newpropertyValues;
    if (apiData) {
        propertyValues = Object.values(apiData);
        //   entries=Object.entries(apiData);  
        //   console.log(entries ,"entries")
        //  console.log(propertyValues[0] , "property values")

        //  newpropertyValues = Object.values(propertyValues)
        //  console.log(newpropertyValues , " new property values")
        //  console.log(newpropertyValues[0] , " new  0th element property values")
        newarray = propertyValues[0]

        //  console.log(newarray[0] ,"new array 0th element")
    }

    console.log(newarray, "new array")


    // if(newarray){
    //     for (let index = 0; index < newarray.length; index++) {
    //         console.log(newarray[index].company_name)
    //         console.log(newarray[index].title)

    //     }


    //     // companyname=newarray[0].company_name

    // }











    return <>




        <div className="min-h-screen w-full font-poppinsFont px-5 " id="Services">
            <div className="flex flex-col mt-20 justify-center items-center">


                <div className=" text-center flex flex-col flex-wrap ">
                    <h1 className="text-4xl">Your ideal job awaits, start the <span className='text-red-900 font-semibold'>search</span></h1>
                    <p className="mt-2">Get the lateset job openings that best suits you!</p>
                </div>

                <div className="JobSearch-section mt-16 flex flex-wrap gap-4 justify-center text-black font-poppinsFont ">
                    <select className="w-[15vw] xs:w-[30vw] sm:w-[30vw] rounded-lg border-none outline-none opacity-50 transition-all hover:opacity-100" >
                        <option hidden selected>Job role</option>
                        <option value="Ios developer" >Ios developer</option>
                        <option value="Frontend developer" >Frontend developer </option>
                        <option value="Backend developer">Backend developer</option>
                        <option value="Android developer">Android developer</option>
                    </select>
                    <select className="w-[15vw] xs:w-[30vw] sm:w-[30vw]  rounded-lg border-none outline-none opacity-50 transition-all hover:opacity-100" >
                        <option hidden selected>Job type</option>
                        <option value="Full time " >Full time</option>
                        <option value="Part time " >Part time  </option>
                        <option value="Contract">Contract</option>
                    </select>
                    <select className="w-[15vw] xs:w-[30vw] sm:w-[30vw]  rounded-lg border-none outline-none opacity-50 transition-all hover:opacity-100" >
                        <option hidden selected>Location </option>
                        <option value="Remote" >Remote</option>
                        <option value="On site " >On site</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                    <select className="w-[15vw] xs:w-[30vw] sm:w-[30vw]  rounded-lg border-none outline-none opacity-50 transition-all hover:opacity-100" >
                        <option hidden selected>Experience  </option>
                        <option value="Remote" >Fresher</option>
                        <option value="Junior level " >Junior Level</option>
                        <option value="Mid level">Mid Level </option>
                        <option value="Senior level">Senior Level </option>
                    </select>
                    <input type="text" className="w-[15vw] xs:w-[30vw] sm:w-[30vw]  rounded-lg border-none outline-none px-1  transition-all hover:opacity-50" placeholder="Search here" name="" id="" />
                    <button className={`bg-white rounded-lg p-1 w-[15vw] xs:w-[30vw] sm:w-[30vw]  hover:bg-zinc-500 transition-all`} onClick={HandleSearch}  >Search</button>
                </div>
            </div>



            <div className="job-listing mt-20 gap-10 flex justify-center flex-col items-center ">
                {newarray ? newarray.map((item, index) => {
                    return <div key={index} className="bg-slate-800 text-white w-[80vw]  mb-3  text-black flex flex-col justify-center items-center " >

                        <div className="flex flex-row w-full px-3 py-2 gap-6 items-center">
                        <div className=" w-full   flex flex-col gap-2 items-start text-justify">
                            <span >Company Name : <span className="text-xl font-semibold">{item.company_name}</span> </span>
                            <span >Position : {item.title}</span>
                            <span >Location : {item.location}</span>
                            
                        </div>
                        
                        <a href={item.url} className="bg-red-900 p-1 rounded-lg ">Apply</a>

                        </div>
                       



                    </div>
                }) : <p>Click on search button </p>}



            </div>


        </div>



    </>



}
