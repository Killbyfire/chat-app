"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { useState } from "react";

export default function Chats({ chats }) {
  const currentChat = useState(null);
  // server side function

  return (
    <main className="flex flex-row items-center w-screen h-screen">
      <Card className="flex flex-col align-center overflow-y-scroll w-[20vw] h-screen">
        {/* Sidebar of all chats */}
        {chats.map((chat) => {
          return (
            <Link href={`/chat/${chat.id}`}>
              <Card key={chat.id} className="my-2 mx-2 rounded-[10px]">
                <CardHeader>
                  {/* Avatar next to data */}
                  <Avatar></Avatar>
                  <CardTitle>{chat.name}</CardTitle>
                  <CardDescription>
                    {chat.lastMessage} • {chat.lastSeen}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </Card>
      {/* Default state when no chat is currently opened */}
      <Card>
        <CardHeader>
          <CardTitle>Create a new chat</CardTitle>
        </CardHeader>
        <CardContent>{/* Form */}</CardContent>
      </Card>
      {/* <Card> */}
      {/* <CardHeader> */}
      {/* Avatar next to data */}
      {/* <Avatar></Avatar> */}
      {/* <CardTitle>Person's name</CardTitle> */}
      {/* <CardDescription>Last seen</CardDescription> */}
      {/* </CardHeader> */}
      {/* </Card> */}
    </main>
  );
}
