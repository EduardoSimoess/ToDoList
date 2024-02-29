import React, { useContext, useState } from "react";
import { GlobalContext } from "@/provider/global";

export default function List() {
    const { list, setList } = useContext(GlobalContext);

    const handleCheckBox = (i: number) => {
        const newList = [...list];
        newList[i].checked = !newList[i].checked;
        setList(newList);
        localStorage.setItem("list", JSON.stringify(newList));
    }

    const handleExcludeBtn = (i: number) => {
        const oldList = [...list];
        const newList = oldList.filter((_item, index) => i !== index);
        setList(newList);
        localStorage.setItem("list", JSON.stringify(newList));
    }

    return (
        <div>
            {list.map((item, i) => (
                <div>
                    <input type="checkbox" key={i} checked={item.checked}
                    onChange={() => handleCheckBox(i)}/>
                    <label>{item.text}</label>
                    <button onClick={() => handleExcludeBtn(i)}>Delete</button>
                </div>
            ))}
        </div>
    )
}