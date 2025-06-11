import React from 'react'
import { useState, useEffect } from 'react';
import { numbers } from '../data/number'
import { text } from 'stream/consumers';
import clsx from 'clsx';
import { PokemonType } from '../data/nama_pokemon';

interface HeaderProps {
    resetTime: number
    onTimeout: () => void;
    isTeksDraf: boolean
    side: 'L' | 'R';
    finishDraft: boolean;
    currentActiveDirection:React.MutableRefObject<'L' | 'R'>;
    
    
}


const Header = ({ resetTime, onTimeout, finishDraft, isTeksDraf, side,currentActiveDirection }: HeaderProps) => {
    const [start, setStart] = useState(false)
    const [number, setNumber] = useState(20);
    const [hide, setHide] = useState(false);
   
    useEffect(() => {
        if (!hide || number < 1 || finishDraft) return;
        const interval = setInterval(() => {
            setNumber((number) => number -= 1)
            if (number <= 1) {
                clearInterval(interval);
                onTimeout();
            }

        }, 1000)
        return () => clearInterval(interval)
    }, [hide, number, onTimeout, finishDraft,]);


    useEffect(() => {
        if (hide && !finishDraft) {
            setNumber(20);
        }
    }, [hide, resetTime, finishDraft]);

    const handleStart = () => {
        setHide(true);
        setStart(true);
        
    }
    const handleReset = () => {
        window.location.reload();
    }

    let text = 'Welcome to Draft Simulator!';
  if (hide && !isTeksDraf) {
    text =  'Ban Pokemon'
  } else if (hide && isTeksDraf && !finishDraft) {
    text = side === 'L' ? 'Pick Your Pokemon Left !' : 'Pick Your Pokemon Right!';
  } else if (finishDraft) {
    text = 'Draft Finished!';
  }


    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center'>

                {/* <div className="  purborder-solid rounded-b-3xl  bg-white w-72 h-14 md:w-96  ">
                    <p className="font-sans font-normal  right- text-[16.02px] leading-none tracking-normal text-center align-middle mt-3">{text}</p>
                </div> */}
                <div className='h-full w-full '>
                    <div className={clsx("bg-contain h-[50px] md:h-[65px] bg-center bg-no-repeat z-10 ",
                        {
                            'bg-[url(./img_navbar/start.png)]':!hide ||finishDraft,
                            'bg-[url(./img_navbar/purple_navbar.png)]':(hide && !isTeksDraf && currentActiveDirection.current==='L')||(hide && isTeksDraf && side==='L'),
                            'bg-[url(./img_navbar/orange_navbar.png)]':(hide && !isTeksDraf && currentActiveDirection.current==='R')||(hide && isTeksDraf && side==='R'),  
                           
                        }
                    )}>
                    </div>
                </div>
                <p className='z-20 absolute text-[16.02px] mt-2 md:mt-4 md:text-[17px]'>{text}</p>
                <div>
                </div>


                {!start && (
                    <div className="fixed inset-0 bg-transparent bg-opacity-50 z-30 pointer-events-auto flex items-center justify-center"></div>
                )}




                {hide && !finishDraft &&
                    <div className='flex flex-col justify-center items-center gap-3'>
                        {numbers.filter((item) => item.id === number).map((item) => (
                            <img key={item.id} src={item.img} alt="number" className='h-14 relative -top-7' />
                        ))}
                    </div>
                }

                <div className='flex justify-center -mt-3'>
                    {!hide &&
                        <button className='text-white box-content w-[125.06px] h-[48.03076934814453px] z-40 md:w-44 md:h-14 border-1 rounded-full bg-orange-500 ' onClick={handleStart}>Start Draft</button>
                    }
                    {finishDraft && (
                        <button className='text-white  box-content w-[125.06px] h-[48.03076934814453px]  md:w-44 md:h-14 border-1 rounded-full bg-orange-500' onClick={handleReset}>Reset Draf</button>
                    )}
                </div>
            </div>

        </div>
    )
}


export default Header

// import React, { Component } from 'react';
// import BanCard from '../components/Ban';
// import Karakter from '../components/Karakter';
// import { DataKarakter } from '../data/data_karakter';
// // import { clsx } from 'clsx';

// class Header extends Component {
//     render() {
//         return (

//             <div className='flex flex-col'>
//                 <div className='flex flex-col items-center'>
//                     <div className='border-none  w-72 h-3  bg-gradient-to-r from-50% from-purple-950  via-10% via-black to-30% to-orange-800 md:w-96 '>

//                     </div>

//                     <div className=" border-solid rounded-b-3xl  bg-white w-72 h-14 md:w-96 ">
//                         <p className="font-sans font-normal text-[16.02px] leading-none tracking-normal text-center align-middle mt-3">Welcome to Draft Simulator!</p>
//                     </div>
//                     <div className='flex justify-center -mt-4'>
//                         <button className='text-white box-content w-[125.06px] h-[48.03076934814453px] fomt-md:w-44 md:h-14 border-1 rounded-full bg-orange-500 '>Start Draft</button>
//                     </div>
//                 </div>
//                 <BanCard />
//                 {/* {DataKarakter.map((item, index) => (
//                     <Karakter key={index} title={item.name} />
//                 ))} */}
//                  <Karakter  />
//             </div>

//         );
//     }
// }
// export default Header;

{/* {DataKarakter.map((item, index) => (
                        <Karakter key={index} title={item.name} />
                    ))} */}

