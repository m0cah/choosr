const MAX_ROOM_NUMBER = 999999;
const MIN_ROOM_NUMBER = 100000;


function generateUniqueRoomId(existingRoomNumbers: Set<number>): number {
    let roomNumber: number;
    do {
        roomNumber = Math.floor(Math.random() * (MAX_ROOM_NUMBER - MIN_ROOM_NUMBER + 1)) + MIN_ROOM_NUMBER;
    } while (existingRoomNumbers.has(roomNumber));

    return roomNumber;
}

