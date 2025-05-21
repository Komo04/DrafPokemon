import React, { Component } from "react";
import images from "../images/IconBan.png"

class BanCard extends Component {
    render() {
        const img = [images, images]

        return (
            <div className="flex flex-row justify-between ">
                <div className="flex ml-2">
                    {img.map(((images, index) => (
                        <div key={index} className="ml-3 mt-3 bg-[url('./images/IconBan.png')] bg-center  bg-[length:25px] bg-no-repeat border-2 outline outline-red-600 outline-2 bg-opacity-45 border-solid bg-origin-border items-center bg-gray-700 border-gray-600 rounded-lg w-9 h-9 md:bg-[length:25px] md:w-10 md:h-10 lg:bg-[length:30px] lg:w-12 lg:h-12  ">

                        </div>
                    )
                    ))}

                </div>

                <div className="flex mr-2 ">
                    {img.map(((images, index) => (
                        <div key={index} className="mr-3 mt-3 bg-[url('./images/IconBan.png')] bg-center  bg-[length:25px] bg-no-repeat border-2 outline outline-red-600 outline-2 bg-opacity-45 border-solid bg-origin-border items-center bg-gray-700 border-gray-600 rounded-lg w-9 h-9 md:bg-[length:25px] md:w-10 md:h-10  lg:bg-[length:30px] lg:w-12 lg:h-12 ">


                        </div>
                    )
                    ))}

                </div>
            </div>

        );

    }
} export default BanCard