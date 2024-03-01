import React, { useContext, useState } from "react";
import { GlobalContext } from "@/provider/global";
import AddTask from "./addTask";
import { HiddenBtn } from "./hiddenBtn";


export default function TaskHandler () {
    const { hide } = useContext(GlobalContext);

    return (
        <div>
            { hide ? <HiddenBtn/> : <AddTask/>}
        </div>
    )
}