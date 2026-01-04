function isValidSixDigitRoomCode(str: string) {
  return /^\d{6}$/.test(str);
}

function validateRoomRequestInput(nickname: string, roomCode: string, createRoom: boolean): boolean{
    //step 1: Validate nickname (Allow any username as long as it isnt empty)
    if(nickname.length === 0){
        return false;
    }
    else if(!createRoom){ //If we are joining a room
        if(!isValidSixDigitRoomCode(roomCode)){
            return false;
        }
    }
    return true; //We are either creating a room and have already verified the nickname
                //Or we are joining a room and have verified nickname and room number
}

export {validateRoomRequestInput}