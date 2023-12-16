import React from "react";


export default function Button ({title}){
    return (
        <div>
            <button className="bg-brightColor px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out text-white">
                {title}
            </button>
        </div>
    )
}
