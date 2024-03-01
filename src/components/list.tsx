import React, { useContext } from "react";
import { GlobalContext } from "@/provider/global";
import { FaTrash } from 'react-icons/fa';

export default function List() {
    const { list, setList } = useContext(GlobalContext);

    const handleCheckBox = (i: number) => {
        const newList = [...list];
        newList[i].checked = !newList[i].checked;
        setList(newList);
    }

    const handleExcludeBtn = (i: number) => {
        const oldList = [...list];
        const newList = oldList.filter((_item, index) => i !== index);
        setList(newList);
    }

    return (
        <div className="font-serif flex flex-col gap-3 border-t-2 border-gray-300 pb-2 pt-3">
            {list.map((item, i) => (
                <div key={i} className="flex flex-col text-start border-b-2 border-gray-300 pb-2">
                    <div className="flex flex-row gap-2 items-start text-lg">
                        <div className="">
                        <input type="checkbox" key={`check${i}`} checked={item.checked}
                        onChange={() => handleCheckBox(i)}
                        className="rounded"
                        />
                        </div>
                        <label key={`text${i}`}>{item.text}</label>    
                    </div>
                    <div className="flex flex-row justify-between gap-1 items-center font-mono">
                        { item.checked ? <div className="text-gray-500 text-sm font-serif">Done</div> : <div className="text-red text-red-500 text-sm font-serif">Pending</div>}
                        <FaTrash className="text-gray-500 hover:text-red-500 h-3" key={`btn${i}`} onClick={() => handleExcludeBtn(i)}>Delete</FaTrash>
                    </div>
                </div>
            ))}
        </div>
    )
}