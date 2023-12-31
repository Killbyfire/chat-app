import supabase from "@/utils/supabase";
import Chats from "./chats";

export default async function HomePage() {
  const chats = [
    {id: "102032", name: "Person 1", lastMessage: "Hello", lastSeen: "10m ago" },
    {id: "1020324", name: "Person 2", lastMessage: "Hello", lastSeen: "10m ago" },
  ];

  return (
    <main className="flex flex-row w-screen h-screen">
      <Chats chats={chats} />
    </main>
  );
}
