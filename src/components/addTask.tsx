import React, { useContext, useState } from "react";
import { GlobalContext } from "@/provider/global";

export default function AddTask () {

    const [inputText, setInputText] = useState<string>('');
    const { list, setList } = useContext(GlobalContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
        console.log(list);
        
    }

    const newItem = () => {
        setList([...list, inputText]);
    }



    return (
        <div>
            <input placeholder="Pesquisar..." value={inputText}
            onChange={handleChange}
            />
            <button type="submit" onClick={newItem}>Adicionar</button>
        </div>
    )
}