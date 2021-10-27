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
               <div className="container w-full  flex mx-auto flex-row items-center mt-15 gap-3 font-serif justify-between relative" style={{ height: "42rem" }}>
                  <img src="https://media.istockphoto.com/photos/getting-lost-in-the-code-picture-id1164885329?b=1&k=20&m=1164885329&s=170667a&w=0&h=LrCkNBqRmAzNtUCysJsJVXktCfwNz8iKDOwgg_eRQ-g=" alt="bg" className="w-full h-full object-cover"/>
                   <div className="absolute z-10 w-full h-full" style={{
                            backgroundImage:
                                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 28.3%, rgba(34, 34, 34, 0.06) 77.47%, rgb(34, 34, 34) 100%)",
                        }}/>
                 <div className="w-full flex flex-col gap-4 absolute z-30 px-10">
                     <h1 className="font-bold text-5xl text-white">Hello,
                     <br/> I am Shrutika.</h1>
                     <h3 className="font-semibold text-2xl text-colorBlue-200">I am a Web-Developer!!</h3>
                     <p className="text-xl w-1/2 text-gray-200">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil consequatur excepturi deserunt 
                         repellendus blanditiis vel possimus, itaque praesentium rem modi aspernatur quis? 
                     </p>
                     <div className="flex ">
                         <button className="bg-colorYellow-400 px-3 py-3 border-3 rounded-md  font-semibold border-colorYellow-300 hover:bg-colorYellow-500"><a href="#contact">Hire Me?</a></button>
                     </div>
                 </div>
                </div>
            </>
    );
}
const About=()=>{
  
    return(
            <>
            <section id="about" className="w-full h-full ">
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