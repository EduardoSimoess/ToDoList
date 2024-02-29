"use client";
import AddTask from "@/components/addTask";
import { GlobalProvider } from "@/provider/global";

export default function Home() {
  return (
    <GlobalProvider>
        <main>
          <AddTask/>
        </main>
    </GlobalProvider>
  );
}
