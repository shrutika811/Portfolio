import React from "react";


function AboutSm()
{
    return(
            <> 
               <div className="container w-full flex mx-auto flex-col items-center px-10 py-20 gap-3 font-serif">
                 <div className="w-full flex flex-col gap-2">
                     <h1 className="font-bold text-3xl text-colorBlue-800">Hello,
                     <br/> I am Shrutika.</h1>
                     <h3 className="font-semibold text-colorBlue-800">I am a Web-Developer!!</h3>
                     <p className="text-sm">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil consequatur excepturi deserunt 
                         repellendus blanditiis vel possimus, itaque praesentium rem modi aspernatur quis? 
                     </p>
                     <div className="flex">
                         <button className="bg-colorYellow-400 px-2 py-2 border-2 rounded-md  font-semibold border-colorYellow-300"><a href="#contact">Hire Me?</a></button>
                     </div>
                 </div>
                 <div className="w-full">
                     <img className=" rounded-lg w-25 h-25" src="https://icon-library.com/images/programmer-icon/programmer-icon-14.jpg" alt="portfolio"/>
                 </div>
               </div>
            </>
    );
}
function AboutLg()
{
    return(
            <> 
               <div className="container w-full h-full flex mx-auto flex-row items-center px-10 py-20 mt-15 gap-3 font-serif justify-between">
                 <div className="w-1/2 flex flex-col gap-4">
                     <h1 className="font-bold text-5xl text-colorBlue-800">Hello,
                     <br/> I am Shrutika.</h1>
                     <h3 className="font-semibold text-2xl text-colorBlue-800">I am a Web-Developer!!</h3>
                     <p className="text-xl">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil consequatur excepturi deserunt 
                         repellendus blanditiis vel possimus, itaque praesentium rem modi aspernatur quis? 
                     </p>
                     <div className="flex ">
                         <button className="bg-colorYellow-400 px-3 py-3 border-3 rounded-md  font-semibold border-colorYellow-300 hover:bg-colorYellow-500"><a href="#contact">Hire Me?</a></button>
                     </div>
                 </div>
                 <div className="w-1/2 ml-40 ">
                     <img className=" rounded-lg w-50 h-50" src="https://icon-library.com/images/programmer-icon/programmer-icon-14.jpg" alt="portfolio"/>
                 </div>
               </div>
            </>
    );
}
const About=()=>{
  
    return(
            <>
            <section id="about" className="w-full h-full bg-darkBackground-100 ">
              <div className="lg:hidden">
                  <AboutSm/>
              </div>
              <div className="hidden lg:flex">
                  <AboutLg/>
              </div>
            </section>
            </>
    );
};
export default About;