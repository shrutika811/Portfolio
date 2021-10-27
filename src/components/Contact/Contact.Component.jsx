import React from "react";
import {AiFillMail,AiOutlineArrowRight} from "react-icons/ai";

export default function Contact(){
   const [name,setName]=React.useState("");
   const [email,setEmail]=React.useState("");
   const [message,setMessage]=React.useState("");
  
  // 
    function encode(data){
        return Object.keys(data)//object.keys convert object to array of keys
        .map
        ((key)=>encodeURIComponent(key)+"="+encodeURIComponent(data[key])//it will encode name ,email,message and their values and join by & 
        ).join("&");
    }

    function handleSubmit(e)
    {
        e.preventDefault();//form does not work unless function is called
        fetch("/",{
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:encode({"form-name":"contact",name,email,message}),
        }).then(()=>alert("Message sent!")).catch((error)=>alert(error));
    }
    return(
      <>
         <section id="contact" className="relative">
             <div className="container w-full  md:flex bottom-0 md:px-6 md:py-8 h-screen md:m-3 bg-gray-900 rounded-lg relative">
                <div className="relative w-full md:w-2/3 bg-gray-900 rounded-lg shadow-lg my-5 p-3 h-72 md:h-full">
                     <iframe width="100%" height="100%" title="map" loading="lazy" className="inset-0 md:absolute " frameBorder={0} marginHeight={0} marginWidth={0}
                     style={{filter:"opacity(0.7)"}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000.05662539101!2d73.78308580000001!3d19.9659069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1634368965449!5m2!1sen!2sin"/>
                     <div className="absolute z-10 bg-gray-900 flex bottom-28 rounded-lg shadow-md md:w-96 w-52 h-28 md:h-36 items-start justify-between gap-3 p-1 m-1">
                            <div className="w-1/2 flex flex-col md:p-3 md:m-1 md:gap-2 p-2 gap-1">
                                <h1 className="text-colorBlue-300 md:font-semibold md:text-lg">Address</h1>
                                <p className="text-white text-xs md:text-sm">23, Shreeji Krupa Appt. Indira Nagar, Nashik</p>
                            </div>
                            <div className="w-1/2 flex flex-col gap-1 md:gap-2 p-2  md:m-1 md:mr-10 md:p-3 ">
                                <div className="flex gap-2"><h1 className="text-colorBlue-300 font-semibold md:text-lg">Email
                                </h1>
                                <AiFillMail className="text-white mx-2 my-1.5"/></div>
                                <a className="hidden md:flex text-white ">shrusonawane811@gmail.com</a>
                                <a className="text-white md:hidden text-xs ">shrusonawane<br/>811@gmail.com</a>
                            </div>
                     </div>
                </div>
                <form netlify name="contact"  onSubmit={handleSubmit} className="w-full p-2 mt-1 md:w-1/3 md:px-2 md:py-4 md:mx-2 bottom-0">
                   
                    <h2 className="text-lg font-semibold md:text-xl md:font-bold text-white m-1 md:p-1">Hire Me</h2>
                    
                    
                    <p className="text-xs md:text-base text-colorBlue-200 m-1 md:m-1 md:p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque itaque nostrum iure unde. Cum voluptas placeat 
                     ex, provident facere ea ipsam quaerat impedit quisquam ducimus inventore dolorem voluptate sequi voluptatem.</p>

                    <div className="flex flex-col md:m-1 md:p-1 m-1">
                        <label htmlFor="name" className="text-gray-300 text-sm md:text-lg font-semibold  md:m-1">Name</label>
                        <input type="text" id="name" name="name" className="md:h-8 bg-gray-400 outline-none transition duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                        onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="flex flex-col md:m-1 md:p-1 m-1">
                        <label htmlFor="email" className="text-gray-300 text-sm md:text-lg font-semibold  md:m-1 ">Email</label>
                        <input type="email" id="email" name="email" className="md:h-8 bg-gray-400 outline-none transition duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="flex flex-col  md:m-1 md:p-1 m-1">
                        <label htmlFor="message" className="text-gray-300 text-sm md:text-lg font-semibold md:m-1">Message</label>
                        <textarea id="message" name="message" className="md:h-28 bg-gray-400 outline-none transition duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 "
                        onChange={(e)=>setMessage(e.target.value)}/>
                    </div>
                    <div className=" flex justify-center  my-2 mx-20 lg:mx-15 hover:text-white border-colorYellow-500  md:m-4 md:p-2 bg-colorYellow-400 hover:bg-colorYellow-600 border-2 rounded">
                    <button type="submit" className="text-base md:text-lg font-semibold ">Submit</button>
                    </div>
                </form>
             </div>
         </section>
      </>
    );
}
