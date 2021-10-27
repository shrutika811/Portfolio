import React,{useState} from "react";
import {AiOutlineFileDone} from "react-icons/ai";
import ProjectCard from "./ProjectCard.Component";
const Projects=()=>{
  

    const [projectCard,setprojectCard]=useState([
    {
      image:"https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg",
      title:"Zomato-app",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      link:"",
    },
    {
        image:"https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg",
      title:"Zomato-app",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      link:"",
    },
    {
      image:"https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg",
      title:"Zomato-app",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      link:"",
    },{
        image:"https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__340.jpg",
      title:"Zomato-app",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      link:"",
    },
    ]);
    return(
            <>
            <section id="projects">
                <div className="w-full mx-auto container mb-20">
                  <div className="w-full flex justify-center items-center p-3 m-2 gap-2 md:mt-6">
                      <h1 className="font-bold text-lg md:text-3xl text-colorBlue-800 ">Projects done by me</h1>
                     <span className=" text-colorBlue-800"><AiOutlineFileDone className="w-20 h-8"/></span>
                  </div>
                  <div className=" flex flex-wrap  m-3 p-2">
                     {
                         projectCard.map((project)=>(
                           <ProjectCard {...project} key={project._id}/>
                         
                         ))}
                  </div>
                </div>
            </section>
            </>
    );
};
export default Projects;