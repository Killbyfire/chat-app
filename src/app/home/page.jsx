import supabase from "@/utils/supabase";
import Chats from "./chats";

export default async function HomePage() {
  const chats = [
    { name: "Person 1", lastMessage: "Hello", lastSeen: "10m ago" },
    { name: "Person 2", lastMessage: "Hello", lastSeen: "10m ago" },
  ];

  return (
    <main className="flex flex-row items-center w-screen h-screen">
      <Chats />
    </main>
  );
}