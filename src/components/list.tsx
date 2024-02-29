import React, { useContext, useState } from "react";
import { GlobalContext } from "@/provider/global";

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
        <div>
            {list.map((item, i) => (
                <div key={i}>
                    <input type="checkbox" key={`check${i}`} checked={item.checked}
                    onChange={() => handleCheckBox(i)}/>
                    <label key={`text${i}`}>{item.text}</label>
                    <button key={`btn${i}`} onClick={() => handleExcludeBtn(i)}>Delete</button>
                </div>
            ))}
        </div>
    )
}