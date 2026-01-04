import { NextResponse } from 'next/server'
 
// Remember to configure CORS

export async function POST(req: Request){
  const roomRequestData = await (req.json());

  console.log(roomRequestData);

  return NextResponse.json({status: 200, message: "Request Received!"}); //Change to 201 when we actually create the room Data Structure.
}