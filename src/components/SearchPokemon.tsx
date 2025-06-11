
  interface searchProps{
    searchPokemon:string;
    onSearch:(value:string)=>void
  }
const SearchPokemon = ({searchPokemon,onSearch}:searchProps) => {


    return (
        <form >
            <div className="flex justify-center mt-5  ">
                <input type="text" placeholder='Search Pokemon'className=' w-52 h-7 pl-2 md:w-72' value={searchPokemon} onChange={(e)=>onSearch(e.target.value)}/>
                
            </div>
        </form>
    )

}
export default SearchPokemon 