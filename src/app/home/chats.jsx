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
      <Card className="flex flex-col justify-center align-center overflow-y-scroll w-[20vw] h-screen">
        {/* Sidebar of all chats */}
        {chats.map((chat) => {
          return (
            <Card className=" my-4 mx-2">
              <CardHeader>
                {/* Avatar next to data */}
                <Avatar></Avatar>
                <CardTitle>{chat.name}</CardTitle>
                <CardDescription>
                  {chat.lastMessage} • {chat.lastSeen}
                </CardDescription>
              </CardHeader>
            </Card>
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
