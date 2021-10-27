
import React from "react";

const ProjectCard=(props)=>{
   return(
       <>
      <a href={props.link} className="sm:w-1/2 w-full p-6">
          <div className="hidden md:flex relative h-48  md:h-80 ">
              <img src={props.image} alt="project" className="absolute inset-0 w-full h-full object-cover object-center"/>
              <div className="flex flex-col gap-3 relative px-8 py-10 w-full z-10 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 items-center justify-center transition delay-150 duration-300">
                <h2 className="text-white text-3xl font-semibold">
                    {props.title}
                </h2>
                <p className="text-white text-xl m-2 pt-3">
                    {props.description}
                </p>
              </div>
          </div>
          <div className=" flex flex-col md:hidden">

              <img src={props.image} alt="project"/>
              <h1 className="font-bold my-2 text-colorBlue-700 ">{props.title}</h1>
               <p className="text-black text-sm">
                    {props.description}
                </p>
          </div>
        </a>
       </>
   );
};
export default ProjectCard;