type Room = {
    id: number, //For joining the room, and for error tracking
    friends: string[], //First friend in array will be the creator, so I don't need to take up more space.

    //Will keep this for now, and expand as needed.
} | undefined