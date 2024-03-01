import React, { useContext, useState } from "react";
import { GlobalContext } from "@/provider/global";
import { FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function AddTask () {

    const [inputText, setInputText] = useState<string>('');
    const { list, setList, setHide } = useContext(GlobalContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    }

    const newItem = () => {
        setList([...list, { text: inputText, checked: false }]);
        setInputText('');
        setHide(true);
    }

    return (
        <div className="flex flex-row px-2 border-2 py-4 rounded-lg border-gray-300 gap-1 shadow-md shadow-slate-500 lg:justify-between">
            <input placeholder="New task" value={inputText}
            type="text"
            onChange={handleChange}
            className="border border-transparent focus:border-transparent focus:outline-none "
            />
            <div className="flex flex-row gap-3">
                <FaTimes type="submit"
                 onClick={() => setHide(true)}
                 className="w-8 h-8 bg-gray-600 text-white rounded-lg p-2 lg:hidden"
                 ></FaTimes>
                <FaPaperPlane type="submit" onClick={newItem}
                className="text-white bg-red-500 rounded-lg w-8 h-8 p-2 lg:hidden"
                ></FaPaperPlane>
                <button type="submit"
                 onClick={() => setHide(true)}
                 className=" bg-gray-100 text-gray-700 font-sans rounded-lg px-3 py-2 hidden sm:block hover:bg-gray-300 hover:font-bold"
                 >Cancel</button>
                <button type="submit"
                 onClick={newItem}
                 className=" bg-red-500 text-white font-sans rounded-lg px-3 py-2 hidden sm:block hover:bg-red-700 hover:font-bold"
                 >Add new item</button>
            </div>
        </div>
    )
}