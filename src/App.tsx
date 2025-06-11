// import { useState } from "react";
import "./App.css";
import BanCard from './components/Ban';
import Karakter from './components/Karakter';
// import Card from "./components/Contoh_Loop";
// import { pokemon } from "./data";
import Header from './components/Header';
import { Poke, PokemonType } from "./data/nama_pokemon";
import { useRef, useState } from "react";
import SearchPokemon from "./components/SearchPokemon";
import { pokemon } from "./data/contoh_data";
// import { pokemon } from "./data/contoh_data";
function App() {
  const [isSelectingCharacter, setIsSelectingCharacter] = useState(false);
  const [karakterL, setKarakterL] = useState<PokemonType[]>([]);
  const [karakterR, setKarakterR] = useState<PokemonType[]>([]);
  const [bannedListL, setBannedListL] = useState<PokemonType[]>([]);
  const [bannedListR, setBannedListR] = useState<PokemonType[]>([]);
  const currentActiveDirection = useRef<'L' | 'R'>('L')
  const currentActiveCharacter = useRef(0);
  const currentActivePick = ['L', 'R', 'R', 'L', 'L', 'R', 'R', 'L', 'L', 'R']
  const [resetTime, setResetTime] = useState(0);
  const [searchPokemon ,setSearchPokemon] =useState('')
  const side = currentActivePick[currentActiveCharacter.current] as 'L' | 'R';
  const filterPokemon =Poke.filter(poke => poke.nama.toLowerCase().includes(searchPokemon.toLowerCase()))

  // const handleSearch =()=>{
  //   const sea
  //   const teksSearch= Poke.filter((p)=>)

  // }

 
  



  const handleTimeOut = () => {
    
  const allDrafPick=[...karakterL, ...karakterR,...bannedListL, ...bannedListR].map((p)=> p.id);
  const avaiblePokemon = Poke.filter((p) => !allDrafPick.includes(p.id));
    if (avaiblePokemon.length === 0) return;
  const randomPokemon = avaiblePokemon[Math.floor(Math.random() * avaiblePokemon.length)];
    if (!randomPokemon) return;
    if (isSelectingCharacter) {
      handleSelectCharacter(randomPokemon);  
    }else{
      handleBan(randomPokemon);
    }
  };
  const handleSelectCharacter = (pokemon: PokemonType) => {
    if (currentActiveCharacter.current >= currentActivePick.length) return;
    const isLeft = currentActivePick[currentActiveCharacter.current];
    if (isLeft === 'L') {
      if (karakterL.find((item) => item.id === pokemon.id)) return;
      setKarakterL([...karakterL, pokemon]);
    } else {
      if (karakterL.find((item) => item.id === pokemon.id)) return;
      setKarakterR([...karakterR, pokemon]);
    }
    setResetTime((prev) => prev + 1);
    currentActiveCharacter.current += 1;

  }

  const handleBan = (pokemon: PokemonType) => {
    // if (bannedList.length >= 4) return;
    // if (bannedList.find((item) => item.id === pokemon.id)) return;
    // setBannedList([...bannedList, pokemon]);
    if (currentActiveDirection.current === 'L') {
      setBannedListL([...bannedListL, pokemon]);
      currentActiveDirection.current = 'R';
    } else {
      setBannedListR([...bannedListR, pokemon]);
      currentActiveDirection.current = 'L';
    }
    setResetTime((prev) => prev + 1);
    if (bannedListL.length + bannedListR.length >= 3) {
      setIsSelectingCharacter(true);
    }
  };

  
  // const leftBanned = bannedList.slice(0, 2);
  // const rightBanned = bannedList.slice(2, 4);
  return (
    <div className="App">
      <div className="bg-[url('./images/bg.png')] w-full min-h-screen bg-cover bg-no-repeat bg-center ">
        <div>

          <Header resetTime={resetTime} onTimeout={handleTimeOut} isTeksDraf={isSelectingCharacter} side={side} currentActiveDirection={currentActiveDirection} finishDraft={currentActiveCharacter.current >= currentActivePick.length} />
          
          <SearchPokemon searchPokemon={searchPokemon} onSearch={setSearchPokemon}/>
          
          <div className="flex justify-between">
            {/* {img.map((index) => ( */}
            <BanCard left={bannedListL} right={bannedListR} isFinishDraft={currentActiveCharacter.current >= currentActivePick.length} />
            {/* ))} */}
          </div>
          <Karakter karakterL={karakterL} karakterR={karakterR} onCardClick={isSelectingCharacter ? handleSelectCharacter : handleBan} bannedList={[...bannedListL, ...bannedListR]} pickedList={[...karakterL, ...karakterR]}  isFinishDraft={currentActiveCharacter.current >= currentActivePick.length} filterpokemon={filterPokemon}  />

        </div>
        {/* {
        pokemon.map((item, index) => (
          <Card key={index} title={item.name}  />
        ))
      } 
 */}
        {/* {!hide && <Card title="Pokemon 1" />}
        <button
          className="bg-purple-950 text-white w-20 h-10 rounded-lg absolute top-0 left-0"
          onClick={() => setHide((current) => !current)}
        >
          Hide
        </button> */}
      </div>
    </div>
  );
}

export default App;
