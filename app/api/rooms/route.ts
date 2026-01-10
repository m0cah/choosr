import { RoomRequestData } from '@/types/requests';
import { NextResponse } from 'next/server';
import { createRoom, addHostToRoom, addFriendToRoom, readRoom } from '../../_lib/room-manager';
 
// Remember to configure CORS

export async function POST(req: Request){

  const roomRequestData: RoomRequestData = await (req.json()); //If the data isn't validated by the time it gets to here, it honestly deserves to crash our system...

  if(!roomRequestData || !Object.hasOwn(roomRequestData, "roomCode") || !Object.hasOwn(roomRequestData, "nickname") || !Object.hasOwn(roomRequestData, "createRoom")){
    return NextResponse.json({status: 404, message: "Malformed JSON. Please check your request."});
  }

  if(roomRequestData.createRoom){
    let roomId = createRoom();
    if(addHostToRoom(roomId, roomRequestData.nickname)){
      return NextResponse.json({status: 201, message: `Created Room #${roomId}!`, roomInfo: readRoom(+roomId)});
    }
    else{
      return NextResponse.json({status: 500, message: "Unexpected Server Error. \
        Could be a variety of things: \n\
        1. addRoom could've failed\n\
        2. Host as already been added to the room with this roomId\n\
        3. Unexpected error (good luck)"});
    }
  }
  else {
    if(addFriendToRoom(+roomRequestData.roomCode, roomRequestData.nickname)){
      return NextResponse.json({status: 200, message: `Added to Room #${roomRequestData.roomCode}!`, roomInfo: readRoom(+roomRequestData.roomCode)});
    }
    else{
      return NextResponse.json({status: 500, message: "Unexpected Server Error. \
        Could be a variety of things: \n\
        1. Incorrect Room Code\n\
        2. No host has been added to this room yet\n\
        3. Unexpected error (good luck)"});
    }
  }
}