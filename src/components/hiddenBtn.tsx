import { IoMdAdd } from 'react-icons/io';
import React, { useContext, useState } from "react";
import { GlobalContext } from "@/provider/global";

export function HiddenBtn () {

    const { setHide } = useContext(GlobalContext);

    return (
        <div className='flex flex-row items-center h-6 w-6'>
            <IoMdAdd onClick={() => setHide(false)}  
            className='text-red-500 hover:bg-red-500 rounded-full hover:text-white h-full w-full'/>
        </div>
    )
}