"use client";
import AddTask from "@/components/addTask";
import List from "@/components/list";
import { GlobalProvider } from "@/provider/global";

export default function Home() {
  return (
    <GlobalProvider>
        <main>
          <AddTask/>
          <List/>
        </main>
    </GlobalProvider>
  );
}
