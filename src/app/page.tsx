"use client";
import AddTask from "@/components/addTask";
import Header from "@/components/header";
import List from "@/components/list";
import { GlobalProvider } from "@/provider/global";

export default function Home() {
  return (
    <GlobalProvider>
        <main className="flex flex-col gap-4 px-6 font-serif">
          <Header/>
          <List/>
          {/* <AddTask/> */}
        </main>
    </GlobalProvider>
  );
}
