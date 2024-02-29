import React, { createContext, useState } from "react";
import { ContextProps } from "@/interfaces/contextInterface";
import { initialState } from ".";

export const GlobalContext = createContext<ContextProps>(initialState);

export const GlobalProvider= ({ children }: any) => {
    const [list, setList] = useState<string[]>([]);

    return(
        <GlobalContext.Provider value={{list, setList}}>
            {children}
        </GlobalContext.Provider>
    )
}