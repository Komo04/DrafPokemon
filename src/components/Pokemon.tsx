import React from 'react'
import { Poke, PokemonType } from '../data/nama_pokemon';
import clsx from 'clsx';
import { useState } from 'react';

interface PokemonProps {
    onCardClick: (pokemon: PokemonType) => void;
    bannedList: PokemonType[];
    pickedList: PokemonType[];
    isPickDone: boolean;
    filterPokemon:PokemonType[]
}


const Pokemon = ({ onCardClick, bannedList, pickedList,isPickDone,filterPokemon }: PokemonProps) => {
    if(isPickDone) return null;
    return (
        // <div className='grid grid-cols-2 min-[375px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 justify-items-center mt-4 gap-2 relative '>
        <div className={clsx('grid grid-cols-2 justify-items-center mt-4 gap-2 relative', 'min-[375px]:grid-cols-3', 'min-[572px]:grid-cols-4', 'md:grid-cols-4 ', 'lg:grid-cols-7')}>
            {filterPokemon.map((item) => {
                const isBanned = bannedList.some((b) => b.id === item.id);
                const isPick = pickedList.some((b) => b.id === item.id);
                return (
                    <div key={item.id} className={isPickDone ? 'hidden' : ''}>
                        <div onClick={() => onCardClick(item)} style={{ backgroundColor: item.color }} className={clsx('bg-[url("./images/Pattern.png")] bg-[length:50px] z-0 border-2 border-solid rounded-md  overflow-hidden r w-[60px] h-[88px] border-[#220A3D] cursor-pointer relative ', 'md:w-[70px] md:h-[87px]', 'lg:w-[72px] lg:h-[100px]',
                            isBanned || isPick? 'opacity-45 pointer-events-none ' : 'hover:outline-2 hover:outline-red-600'
                           )} >
                            <img src={item.image} alt="Pokemon" className='h-[70px] lg:h-[82px]' />
                            <div className={clsx('absolute  bottom-0 z-20 1  border-2 w-[100%] bg-[#220A3D] border-none  text-white uppercase text-[10px] font-semibold', '   md:text-[10px] ')}>{item.nama}</div>
                        </div>
                    </div>
                )
            })}
        </div >




    )
}

export default Pokemon