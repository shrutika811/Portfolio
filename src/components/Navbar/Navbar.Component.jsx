import React,{useState} from "react";

//icons
import {FaUserCircle} from "react-icons/fa";
import {BiMenu} from "react-icons/bi";
function NavSm({isDropdownOpen,setIsDropdownOpen})
{
    return(
        <>
           <div className="container  flex items-center justify-between font-normal w-full">
               <div className=" text-white w-8 h-8">
                    <FaUserCircle className="w-full h-full"/>
               </div>
                <div className="relative w-20">
                   <div onClick={()=>setIsDropdownOpen((prev)=>!prev)} className="w-15 h-8 ">
                   <BiMenu className=" text-white w-full h-full"/>
                  </div>
                
                   {isDropdownOpen &&(
                       <div className=" bg-white shadow absolute z-30 top-12 text-sm w-30 font-semibold flex-col gap-2 border-1 border-gray-400 rounded ">
                           <div className=" flex-col gap-2 w-full p-1  hover:bg-colorYellow-400">
                               <a href="#about">About</a>
                            </div>
                            <div className=" flex-col gap-2 w-full p-1  hover:bg-colorYellow-400">
                              <a href="#projects">Projects</a>
                            </div>
                            <div className=" flex-col gap-2 w-full p-1  hover:bg-colorYellow-400">
                               <a href="#skills">Skills And Technolgies</a>
                            </div>
                            <div className=" flex-col gap-2 w-full p-1 hover:bg-colorYellow-400">
                               <a href="#contact">Contact Me</a>
                            </div>
                       </div>
                   )}
                 </div>
           </div>
        </>
    );

}
function NavLg()
{
    return(
        <>
        <div className="container flex items-center justify-between">
           <div className="gap-3 flex">
            <div className=" text-white w-7 gap-3">
                    <FaUserCircle className="w-full h-full"/>
             </div>
                  <h2 className="text-white gap-3 font-medium ">Shrutika Sonawane</h2>
             </div>
             <div className="flex text-white gap-4 font-medium ">
                            <div className=" flex gap-2  px-2 py-2 hover:bg-colorYellow-400 hover:border-2 rounded">
                            <a href="#about">About</a>
                            </div>
                            <div className=" flex gap-2  px-2  py-2  hover:bg-colorYellow-400 hover:border-2 rounded">
                            <a href="#projects">Projects</a>
                            </div>
                            <div className=" flex gap-2  px-2 py-2  hover:bg-colorYellow-400 hover:border-2 rounded">
                            <a href="#skills">Skills And Technolgies</a>
                            </div>
                            <div className=" flex gap-2 px-2  py-2  hover:bg-colorYellow-400 hover:border-2 rounded">
                            <a href="#contact">Contact Me</a>
                            </div>
                       

             </div>
        </div>
        </>
    );
}
const Navbar=()=>{
  
    const [isDropdownOpen, setIsDropdownOpen]=useState(false);
    return(
       <>
         <nav className="bg-darkBackground-700 px-4 py-3.5 w-full md:sticky top-0 z-50">
             <div className="lg:hidden">
                  {/* Mobile Screen */}
                  <NavSm isDropdownOpen={isDropdownOpen}
                        setIsDropdownOpen={setIsDropdownOpen}/>
             </div>
             <div className="hidden w-full lg:flex">
                 {/*Large Screen*/}
                 <NavLg/>
             </div>
         </nav>
       </>
    );
};
export default Navbar;