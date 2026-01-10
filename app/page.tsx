'use client'

import { useRef } from "react";
import type { RoomRequestData } from "@/types/requests"
import { validateRoomRequestInput } from "./_lib/input";

export default function Home() {

  const nicknameRef = useRef<HTMLInputElement>(null);
  const roomRef = useRef<HTMLInputElement>(null);
  
  const buildRequest = (createRoom: boolean) : RoomRequestData => {
    let nickname = nicknameRef.current?.value.trim() ?? "";
    let roomCode = roomRef.current?.value.trim() ?? "";

    let roomRequestData: RoomRequestData;

    if(!validateRoomRequestInput(nickname, roomCode, createRoom)){
      roomRequestData = {
        nickname: "",
        roomCode: "",
        createRoom: false,
        errorOnRoomRequest: true
      }
    }
    else{
      roomRequestData = {
        nickname: nickname,
        roomCode: roomCode,
        createRoom: createRoom,
        errorOnRoomRequest: false
      }
    }

    return roomRequestData
  }

  const handleRoomRequest = async (createRoom: boolean) => {
    const roomData: RoomRequestData = buildRequest(createRoom);
    if(roomData.errorOnRoomRequest){
      console.log("There was an error processing this request");
    }
    else {
      const res = await fetch("/api/rooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roomData),
      });
    }
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="grid place-items-center text-center gap-8">
        <h1 className="text-3xl font-bold">Welcome to Choosr!</h1>

        <input className="w-fit text-center border rounded black p-1" 
               placeholder="Enter nickname" 
               ref={nicknameRef}/>

        <input className="w-fit text-center border rounded black p-1" 
               placeholder="Enter room code" 
               ref={roomRef}/>

        <button className="border rounded black p-2" onClick={() => {handleRoomRequest(false)}}>Join Room</button>

        <p className="">Or</p>

        <button className="border rounded black p-2" onClick={() => {handleRoomRequest(true)}}>Create Room</button>
      </div>
    </div>
      );
}
