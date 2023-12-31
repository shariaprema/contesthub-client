import { Link } from "react-router-dom";
import pic1 from "../../../assets/image/banner/final.webp"
import { useState } from "react";
import useContest from "../../../hooks/useContest";
import useSearch from "../../../hooks/useSearch";


const Banner = () =>{ 
const [search,setSearch]= useState(true)
const contests = useSearch(search)




    const handleSearch = e =>{
       e.preventDefault();
       const searchText= e.target.search.value
       console.log(searchText);
       setSearch(searchText);
    }

    return(
        <div>
              <div  className=" relative w-full sm:h-[400px] md:h-[500px] lg:h-[600px] z-0">
                <img src={pic1} className="w-full h-[600px] " />
                <div className="absolute  flex items-center h-full left-0 top-0 bg-gradient-to-r from-slate-700 to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white   pl-16 lg:w-1/2 md:w-3/5 sm:w-1/4 sm:flex-wrap text-ellipsis overflow-hidden'>
                        <h2 className='lg:text-6xl md:text-6xl font-bold text-4xl'>Unlock Your Creative Potential!</h2>
                        <p className='my-6'>Discover a world of innovation and talent. From coding challenges to photography contests, dive into diverse competitions, showcase your skills, and let your creativity shine at ContestHub.</p>
                        <div>
                        <form onSubmit={handleSearch}>   
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" name="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
                                <input type="submit" value="Search" className="text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
                            </div>
                        </form>
                        
                        </div>
                    </div>
                </div>
               
            </div>


        </div>
    );
};

export default Banner;
