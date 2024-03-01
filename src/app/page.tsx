"use client";
import AddTask from "@/components/addTask";
import Header from "@/components/header";
import { HiddenBtn } from "@/components/hiddenBtn";
import List from "@/components/list";
import TaskHandler from "@/components/taskHandler";
import { GlobalProvider } from "@/provider/global";


export default function Home() {
  return (
    <GlobalProvider>
        <main className="flex flex-col gap-4 px-6 font-serif">
          <Header/>
          <List/>
          <TaskHandler/>
        </main>
    </GlobalProvider>
  );
}
