
import React from 'react'
import Pokemon from './Pokemon';
import { poke } from '../data/nama_pokemon';
import Avatar from "../images/avatar.png"
interface KarakterProps {
    title:string;
    
  
}

const Karakter = ({title}:KarakterProps) => {
  
  return (
<div className="grid gap-1 grid-cols-grid-rows-1">
                <div className="flex flex-row ml-4 mt-4 md:mt-4 md:ml-5 lg:mt-7">
                    <div className="  bg-[url('./images/inconpurple.png')] bg-center bg-[length:45px] bg-no-repeat border-2 outline outline-purple-300 outline-4 border-solid bg-origin-border items-center bg-purple-950 border-purple-700 rounded-lg w-28 h-16 md:w-20 md:h-20 z-20 md:bg-[length:60px] "></div>
                   
                   <div className="flex flex-row items-end invisible ">
                        <div className=" border-2 w-32 h-20 bg-gray-700 opacity-60 border-none rounded-r-xl rounded-l-none invisible lg:visible"></div>
                        <div className="border-2 w-32 h-6 bg-purple-400 rounded-br-lg absolute text-lg text-center leading-6 border-none z-10 invisible lg:visible">{title}</div>
                        <img src={Avatar} alt="Avatar" className="w-20 h-20 relative z-0  right-28 -top-4 invisible lg:visible" />
                  </div>
                    
                </div>
                
              </div> 

  )
}

export default Karakter




// import React, { Component } from "react";
// import Avatar from "../images/avatar.png"

// class Karakter extends Component {
//     render() {
//         return (
            // <div className="grid grid-cols-[25%_50%_25%] ">
            //     <div className="grid gap-1 grid-cols-grid-rows-1">
            //     <div className="flex flex-row ml-5 mt-5 ">
            //         <div className=" bg-[url('./images/inconpurple.png')] bg-center bg-[length:60px] bg-no-repeat border-2 outline outline-purple-300 outline-4 border-solid bg-origin-border items-center bg-purple-950 border-purple-700 rounded-lg w-20 h-20 z-20 "></div>
            //         <div className="flex flex-row items-end ">
            //             <div className=" border-2 w-32 h-20 bg-gray-700 opacity-60 border-none rounded-r-xl rounded-l-none"></div>
            //             <div className="border-2 w-32 h-6 bg-purple-400 rounded-br-lg absolute text-lg text-center leading-6 border-none z-10 ">Trainer 1</div>
            //         </div>
            //         <div className="relative ">
            //             <img src={Avatar} alt="Avatar" className="w-20 h-20 relative z-0  right-28 -top-4" />
            //         </div>
            //     </div>
            //   </div>       
            //     </div>
          
          






//         )


//     }
// }
// export default Karakter