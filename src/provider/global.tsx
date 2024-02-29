import React, { createContext, useState, useEffect } from "react";
import { ContextProps, ListProps } from "@/interfaces/contextInterface";
import { initialState } from ".";

export const GlobalContext = createContext<ContextProps>(initialState);

export const GlobalProvider= ({ children }: any) => {
    const [list, setList] = useState<ListProps[]>([]);

    useEffect(() => {
        const storedList = localStorage.getItem("list");
        if(storedList) {
            setList(JSON.parse(storedList));
        }
    }, []);

    return(
        <GlobalContext.Provider value={{list, setList}}>
            {children}
        </GlobalContext.Provider>
    )
}