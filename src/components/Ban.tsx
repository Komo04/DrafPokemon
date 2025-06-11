import clsx from "clsx";
import { PokemonType } from "../data/nama_pokemon";
interface banProps {
    left: PokemonType[];
    right: PokemonType[];
     isFinishDraft: boolean;

}
const Ban = ({ left, right,isFinishDraft }: banProps) => {
    return (
        <div className={clsx("flex justify-between w-full",)}>
            <div className={clsx("flex mr-2",)}>

                {[0, 1].map((i) => {
                    const item = left[i];
                    return (
                        <div key={i} className={clsx(  "  ml-3 mt-10 bg-[url('./images/IconBan.png')] bg-center  bg-no-repeat border-2 outline outline-red-600 outline-2 bg-opacity-45 border-solid bg-origin-border items-center bg-gray-700 border-gray-600 rounded-md w-[33.5px] h-[32.5px]", " md:w-10 md:h-10", " lg:w-12 lg:h-12  ", item ? "bg-center bg-no-repeat bg-cover bg-gray-700 outline-red-600" : "bg-gray-900 bg-opacity-30",isFinishDraft ? " transition-transform translate-x-5 md:transition-transform md:translate-x-44 lg:transition-transform lg:translate-x-52":'')}

                            style={item ? { backgroundImage: `url(${item.image})` } : {}}
                            title={item?.nama || ""}

                        />
                    );
                })}


            </div>

           

            <div className="flex mr-2 ">
                {[0, 1].reverse().map((i) => {
                    const item = right[i];
                    return (
                        <div key={i} className={clsx("  ml-3 mt-10 bg-[url('./images/IconBan.png')] bg-center bg-no-repeat border-2 outline outline-red-600 outline-2 bg-opacity-45 border-solid bg-origin-border items-center bg-gray-700 border-gray-600 rounded-md w-[33.5px] h-[32.5px]", " md: md:w-10 md:h-10", "lg:w-12 lg:h-12  ", item ? "bg-center bg-no-repeat bg-cover bg-gray-700 outline-red-600" : "bg-gray-900 bg-opacity-30",isFinishDraft ? ' transition-transform  -translate-x-5 md:transition-transform md:-translate-x-44 lg:transition-transform lg:-translate-x-52 ':'')}

                            style={item ? { backgroundImage: `url(${item.image})` } : {}}
                            title={item?.nama || ""}

                        />
                    );
                })}

            </div>
        </div>


    );

}
export default Ban;