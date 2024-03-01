import React, { createContext, useState, useEffect } from "react";
import { ContextProps, ListProps } from "@/interfaces/contextInterface";
import { initialState } from ".";

export const GlobalContext = createContext<ContextProps>(initialState);

export const GlobalProvider= ({ children }: any) => {
    const [list, setList] = useState<ListProps[]>([]);
    const [hide, setHide] = useState<boolean>(true);

    useEffect(() => {
        const storedList = localStorage.getItem("list");
        if(storedList) {
            setList(JSON.parse(storedList));
        }
    }, []);

    useEffect(() => {
        if(list.length) localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    return(
        <GlobalContext.Provider value={{list, setList, hide, setHide}}>
            {children}
        </GlobalContext.Provider>
    )
}