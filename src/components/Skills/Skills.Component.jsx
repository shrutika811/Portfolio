import React,{useState} from "react";
import {BiAward} from "react-icons/bi";
import {AiOutlineRobot} from "react-icons/ai"
const Skills=()=>{

    const [skills,setSkills]=useState(
        [
              "Web Development",
              "SQL",
              "C++",
              "React-Redux",
              "Arduino Programming",
              "Web Development",
              "Web Development",
              "Web Development",
        ]
    );
    return(
            <>
              <section id="skills" className="bg-colorBlue-900 border-4 rounded border-colorBlue-800">
                  <div className="container w-full flex flex-col items-center justify-center ">
                    <div className="flex w-full items-center p-4 m-3 md:m-10  justify-center md:gap-4 gap-2 border-2 rounded">
                        <BiAward className="h-full w-8 md:w-16 text-white"/>
                        <h1 className=" text-xl md:text-3xl font-bold text-white">Skills And Technologies</h1>
                    </div>
                    <div className="flex flex-wrap m-3">
                         {
                               skills.map((skill)=>(
                                   <div className="w-full md:w-1/2  flex items-center justify-center">
                                       <div className="flex h-full items-center p-2 m-2 md:p-3 md:px-6 md:m-7 gap-2 md:gap-4  hover:bg-colorBlue-600 rounded transition duration-400 ease-in-out">
                                           <AiOutlineRobot className="text-white md:h-24 md:w-10"/>
                                           <span className="text-lg font-bold md:text-2xl text-colorBlue-200">
                                               {skill}
                                           </span>
                                           </div>
                                    </div>
                               ))}
                        
                        
                    </div>
                  </div>
              </section>
            </>
    );
};
export default Skills;