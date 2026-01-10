const MAX_ROOM_NUMBER = 999999;
const MIN_ROOM_NUMBER = 100000;

let existingRooms = new Map<number, Room>(); //Storing in memory for now. Will need to scale with users.

function generateUniqueRoomId(): number {
    let roomId: number;
    do {
        roomId = Math.floor(Math.random() * (MAX_ROOM_NUMBER - MIN_ROOM_NUMBER + 1)) + MIN_ROOM_NUMBER;
    } while (existingRooms.has(roomId));

    return roomId;
}

function deleteRoom(roomId: number): boolean{
    if(existingRooms.has(roomId)){
        existingRooms.delete(roomId);
        return true; /*We can change this to return more advanced objects to help debug later.
                       For now, a simple true/false will suffice. */
    }
    else {
        return false;
    }
}

function createRoom(): number{
    let room: Room = {
        id: generateUniqueRoomId(),
        friends: [],
    };
    existingRooms.set(room.id, room);
    return room.id;
}

function addFriendToRoom(roomId:number, friend: string): boolean{
    if(existingRooms.has(roomId)){
        let room: Room = existingRooms.get(roomId);

        if (!room) return false;

        if(room.friends.length >= 1){ //Cannot add a friend if the host has not been added.
            room.friends.push(friend);
            return true;
        }

        return false;
    }
    else{
        return false;
    }
}

function addHostToRoom(roomId: number, host: string){
    if(existingRooms.has(roomId)){
        let room: Room = existingRooms.get(roomId);

        if(!room) return false;

        if(room.friends.length == 0){ //Cannot host if the host as already been added
            room.friends.push(host);
            return true;
        }

        return false;
    }
    else{
        return false;
    }
}

function readRoom(roomId: number): Readonly<Room>{
    if(existingRooms.has(roomId)){
        let room = existingRooms.get(roomId);
        if(!room) return { id: -1, friends: []};
        let copy = Object.freeze({...room, friends: Object.freeze([...room.friends])}) as Readonly<Room>;
        return copy;
    }
    return { id: -1, friends: []};
}

export { deleteRoom, createRoom, readRoom, addHostToRoom, addFriendToRoom } //Perhaps I make this into a class so the export isnt so lengthy. It will certainly grow as more room operations are necessary.

