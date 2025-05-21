import React, { Component } from 'react';
import BanCard from '../components/Ban';
import Karakter from '../components/Karakter';
import { DataKarakter } from '../data/data_karakter';
// import { clsx } from 'clsx';

class Header extends Component {
    render() {
        return (

            <div className='flex flex-col'>
                <div className='flex flex-col items-center'>
                    <div className='border-none  w-72 h-3  bg-purple-950 md:w-96 '>

                    </div>

                    <div className=" border-solid rounded-b-3xl  bg-white w-72 h-14 md:w-96 ">
                        <p className="font-sans font-normal text-base leading-none tracking-normal text-center align-middle mt-3">Welcome to Draft Simulator!</p>
                    </div>
                    <div className='flex justify-center -mt-4'>
                        <button className='  text-white box-content w-36 h-12 md:w-44 md:h-14 border-1 rounded-full bg-orange-500 '>Start Draft</button>
                    </div>
                </div>
                <BanCard />
                {DataKarakter.map((item, index) => (
                    <Karakter key={index} title={item.name} />
                ))}
            </div>

        );
    }
}
export default Header;
