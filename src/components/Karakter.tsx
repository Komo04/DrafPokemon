import React from 'react'
import Pokemon from './Pokemon';
import Avatar from "../images/avatar.png"
import { DataKarakter } from '../data/data_karakter';
import clsx from 'clsx';
import { PokemonType } from '../data/nama_pokemon';

interface BanProps {
  onCardClick: (pokemon: PokemonType) => void;
  bannedList: PokemonType[];
  karakterL: PokemonType[];
  karakterR: PokemonType[];
  pickedList: PokemonType[];
  isFinishDraft: boolean;
  filterpokemon:PokemonType[]
}

const Karakter = ({ onCardClick, bannedList, karakterL, karakterR, pickedList,isFinishDraft,filterpokemon }: BanProps) => {
  return (
    <div className={clsx('grid grid-cols-[25%_50%_25%]')} >
     
      <div className={clsx("grid gap-1 auto-rows-min", isFinishDraft ? ' transition-transform translate-x-20   md:transition-transform md:translate-x-60 lg:transition-transform lg:translate-x-72' : '')}>
        {DataKarakter.map((_, index) => (
          <div key={index} className={clsx("flex flex-row ml-4 mt-4 md:ml-5 lg:mt-7")}>
            <div
              className={clsx(
                "relative bg-[url('./images/inconpurple.png')] bg-center bg-[length:36.5px_39px] bg-no-repeat border-2 outline outline-purple-300 outline-4 border-solid bg-origin-border bg-purple-950 border-purple-700 rounded-lg w-[50px] h-[50px]",
                "md:w-[70px] md:h-[70px] z-20 lg:w-[70px] lg:h-[69px]"
              ) }
            >
              {karakterL[index] && (
                <img
                  src={karakterL[index].image}
                  alt={karakterL[index].nama}
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />
              )}
            </div>
            <div className={clsx("flex flex-row items-end relative")}>
              <div className="hidden lg:inline-flex border-2 w-28 h-[70px] bg-gray-700 opacity-60 border-none rounded-r-xl rounded-l-none invisible lg:visible" />
              <div className="hidden lg:inline-flex border-2 w-28 h-6 bg-purple-400 rounded-br-lg absolute text-lg text-center indent-3 leading-6 border-none z-10 invisible lg:visible">
                Trainer {index + 1}
              </div>
              <img src={Avatar} alt="Avatar" className="hidden w-14 h-16 relative z-0 right-24 -top-4 invisible lg:visible lg:inline-flex" />
            </div>
          </div>
        ))}
      </div>
   <div >
        <Pokemon onCardClick={onCardClick} bannedList={bannedList} pickedList={pickedList} isPickDone={isFinishDraft} filterPokemon={filterpokemon}  />
      </div>

      
      <div className={clsx("grid gap-1 auto-rows-min",isFinishDraft ? ' transition-transform   -translate-x-20  md:transition-transform md:-translate-x-60 lg:transition-transform lg:-translate-x-72 ' : '')}>
        {DataKarakter.map((_, index) => (
          <div key={index} className={clsx("flex flex-row-reverse mr-4 mt-4 md:mr-5 lg:mt-7")}>
            <div
              className={clsx(
                "relative bg-[url('./images/icon.png')] bg-center bg-[length:36.5px_39px] bg-no-repeat border-2 outline outline-orange-300 outline-4 border-solid bg-origin-border bg-orange-900 border-orange-700 rounded-lg w-[50px] h-[50px]",
                "md:w-[70px] md:h-[70px] z-20 lg:w-[70px] lg:h-[69px]"
              )}
            >
              {karakterR[index] && (
                <img
                  src={karakterR[index].image}
                  alt={karakterR[index].nama}
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />
              )}
            </div>
            <div className="flex flex-row-reverse items-end relative">
              <div className="hidden lg:inline-flex border-2 w-28 h-[70px] bg-gray-700 opacity-60 border-none rounded-l-xl rounded-r-none invisible lg:visible" />
              <div className="hidden lg:inline-flex border-2 w-28 h-6 bg-orange-300 rounded-bl-lg absolute text-lg text-center indent-10 leading-6 border-none z-10 invisible lg:visible">
                Trainer {index + 1}
              </div>
              <img src={Avatar} alt="Avatar" className="hidden w-14 h-16 relative z-0 -right-24 -top-4 invisible lg:visible lg:inline-flex" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Karakter;
