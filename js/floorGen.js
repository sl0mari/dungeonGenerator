//Floor class takes in a tileset
//constructor initializes a floor with the entrance as the root node
//floorGeneroator looks to flow diagram for the next possible room connected to the previous room.
//recursivly run floorGenerator until all rooms are
//run post processing to create loops and add in special event rooms ie shop, secrets, etc


function pickRandomInt(numOutcomes) {
    return Math.floor(Math.random() * numOutcomes);
  }


class Floor {
  constructor(roomNum) {
    this.noOfVertices = roomNum;
    this.AdjList = new Map();
  }
  addRoom(Floor){

  }


}
