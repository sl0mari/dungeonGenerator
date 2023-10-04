// Floor class takes in a tileset
// constructor initializes a floor with the entrance as the root node
// floorGenerator looks to flow diagram for the next possible room connected to the previous room.
// recursively run floorGenerator until all rooms are
// run post-processing to create loops and add in special event rooms ie shop, secrets, etc
/*
function pickRandomInt(numOutcomes) {
    return Math.floor(Math.random() * numOutcomes);
  }
  
  const roomTypes = {
    boss: {
      name: "boss",
      doors: 2,
    },
    bossFoyer: {
      name: "bossFoyer",
      doors: 2,
    },
    entrance: {
      name: "entrance",
      doors: 4,
    },
    exit: {
      name: "exit",
      doors: 1,
    },
    hub: {
      name: "hub",
      doors: 6,
    },
    normal: {
      name: "normal",
      doors: 3,
    },
    reward: {
      name: "reward",
      doors: 2,
    },
  };
  
  const bossFoyerRooms = [];
  const entranceRooms = [];
  const exitRooms = [];
  const hallwayHorizontalRooms = [];
  const hallwayVerticalRooms = [];
  const hubRooms = [];
  const normalRooms = [];
  const rewardRooms = [];
  const secretsRooms = [];
  const shopRooms = [];
  
  class Floor {
    constructor() {
      this.floorGraph = new Map();
    }
  
    addRoom(v) {
      this.floorGraph.set(v, []);
    }
  
    addDist(v, w) {
      this.floorGraph.get(v).push(w);
      this.floorGraph.get(w).push(v);
    }
  
    // floor Generator
    generateFloor(bossRoomCount) {
      this.bossRoomCount = bossRoomCount;
  
      // Add entrance as the root node
      const entrance = entranceRooms[pickRandomInt(entranceRooms.length)];
      const entranceName = this.getNextRoomName(roomTypes["entrance"]);
      this.addRoom(entranceName);
  
      // Start generating the floor layout recursively
      this.generateRooms(roomTypes["entrance"], entranceName);
    }
  
    generateRooms(currentRoomType, currentRoomName) {
      const visited = new Set(); // Keep track of visited rooms
      const queue = [{ roomType: currentRoomType, roomName: currentRoomName, connections: 0 }]; // Use a queue for BFS
  
      while (queue.length > 0) {
        const { roomType, roomName, connections } = queue.shift();
        if (
          visited.has(roomName) ||
          connections >= roomType.doors
        )
          continue;
        visited.add(roomName);
  
        // Generate neighbors for the current room
        const possibleRooms = this.getPossibleRooms(roomType);
  
        for (const nextRoomType of possibleRooms) {
          const newRoomName = this.getNextRoomName(nextRoomType);
          this.addRoom(newRoomName);
          this.addDist(roomName, newRoomName);
          queue.push({ roomType: nextRoomType, roomName: newRoomName, connections: connections + 1 });
        }
      }
    }
  
    getNextRoomName(roomType) {
      let count = 0;
      let roomName;
      do {
        roomName = `${roomType.name}${count.toString().padStart(2, '0')}`;
        count++;
      } while (this.floorGraph.has(roomName));
      return roomName;
    }
  
    getPossibleRooms(currentRoomType) {
      const possibleRooms = [];
      if (roomTypes.boss === currentRoomType) {
        this.bossRoomCount--;
        possibleRooms.push(roomTypes.exit);
      }
      if (roomTypes.bossFoyer === currentRoomType) {
        possibleRooms.push(roomTypes.boss);
      }
      if (roomTypes.entrance === currentRoomType) {
        possibleRooms.push(roomTypes.normal);
      }
      if (roomTypes.exit === currentRoomType) {
        return [];
      }
      if (roomTypes.hub === currentRoomType) {
        possibleRooms.push(roomTypes.bossFoyer, roomTypes.hub, roomTypes.reward, roomTypes.normal);
      }
      if (roomTypes.normal === currentRoomType) {
        possibleRooms.push(roomTypes.bossFoyer, roomTypes.hub, roomTypes.reward, roomTypes.normal);
      }
      if (roomTypes.reward === currentRoomType) {
        return [];
      }
      return possibleRooms;
    }
  
    addSpecialRooms() {
      // Implement the logic to add shop rooms, secrets, rewards, etc.
    }
  
    createLoops() {
      // Implement the logic to create loops in your floor layout
    }
  }

  */
  
  function pickRandomInt(numOutcomes) {
    return Math.floor(Math.random() * numOutcomes);
  }
  
  const bossRooms = ["boss01"];
  const bossRoomDoors = 2;
  
  const bossFoyerRooms = ["boss01"];
  const bossFoyerDoors = 2;
  
  const entranceRooms = ["entrance01", "entrance02"];
  const entranceDoors = 4;
  
  const exitRooms = ["exit01"];
  const exitDoors = 1;
  
  const hallwayHorizontalRooms = ["hallHorizontal01", "hallHorizontal02"];
  const hallwayVerticalRooms = ["hallVertical01", "hallVertical02"];
  
  const hubRooms = ["hub01"];
  const hubDoors = 6;
  
  const normalRooms = ["normal01", "normal02"];
  const normalDoors = 3;
  
  const rewardRooms = ["reward01", "reward02"];
  const rewardDoors = 2;
  
  const secretsRooms = [];
  const shopRooms = [];
  
  class Floor {
    constructor() {
      this.floorGraph = new Map();
    }
  
    addRoom(v) {
      this.floorGraph.set(v, []);
    }
  
    addDist(v, w) {
      this.floorGraph.get(v).push(w);
      this.floorGraph.get(w).push(v);
    }
  
    // floor Generator
    generateFloor(bossRoomCount) {
      this.bossRoomCount = bossRoomCount;
  
      // Add entrance as the root node
      const entrance = entranceRooms[pickRandomInt(entranceRooms.length)];
      this.addRoom("entrance01");
  
      // Start generating the floor layout recursively
      this.generateRooms("entrance01");
    }  
  generateRooms(currentRoom) {
      const visited = new Set(); // Keep track of visited rooms
      const queue = [{ room: currentRoom, connections: 0 }]; // Use a queue for BFS
  
      while (queue.length > 0) {
        const { room, connections } = queue.shift();
        if (visited.has(room) || connections >= this.getRoomDoorCount(room))
          continue; // Skip visited rooms or fully connected rooms
        visited.add(room);
  
        // Generate neighbors for the current room
        const possibleRooms = this.getPossibleRooms(room);
  
        for (const nextRoom of possibleRooms) {
          if (!visited.has(nextRoom)) {
            this.addRoom(nextRoom);
            this.addDist(room, nextRoom);
            queue.push({ room: nextRoom, connections: connections + 1 });
          }
        }
      }
    }
  
    getRoomDoorCount(room) {
      switch (room) {
        case "normal01":
        case "normal02":
          return normalDoors;
        case "boss01":
          return bossRoomDoors;
        case "bossFoyer":
          return bossFoyerDoors;
        case "entrance01":
        case "entrance02":
          return entranceDoors;
        case "exit01":
          return exitDoors;
        case "hub01":
          return hubDoors;
        case "reward01":
        case "reward02":
          return rewardDoors;
        default:
          return 0; // Default to 0 doors for unknown rooms
      }
    }
  
    getPossibleRooms(currentRoom) {
      if (bossRooms.includes(currentRoom)) {
        this.bossRoomCount--;
        return [exitRooms]; 
      }
      if (bossFoyerRooms.includes(currentRoom)) {
        return bossRooms;
      }
      if (entranceRooms.includes(currentRoom)) {
        return normalRooms; 
      }
      if (exitRooms.includes(currentRoom)) {
        return []; 
      }
      if (hubRooms.includes(currentRoom)) {
        return [
          ...bossFoyerRooms,
          ...entranceRooms,
          ...hubRooms,
          ...rewardRooms,
          ...secretsRooms,
          ...shopRooms,
        ];
      }
      if (normalRooms.includes(currentRoom)) {
        return [
          ...bossFoyerRooms,
          ...entranceRooms,
          ...hubRooms,
          ...rewardRooms,
          ...secretsRooms,
          ...shopRooms,
        ];
      }
      if (rewardRooms.includes(currentRoom)) {
        return [];
      }
      return [exitRooms];
    }
  
    addSpecialRooms() {
      // Implement the logic to add shop rooms, secrets, rewards, etc.
    }
  
    createLoops() {
      // Implement the logic to create loops in your floor layout
    }
  }
  const dungeonFloor = new Floor();
  dungeonFloor.generateFloor(2); // Number of boss rooms
  console.log(dungeonFloor);
  
