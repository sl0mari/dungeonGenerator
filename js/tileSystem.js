// Assuming you have your Tileset class and tilemap data as shown in your code
// Get a reference to the HTML canvas element
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

// Define the tile size (24x24 pixels) and the map width and height
const tileSize = 24;
const mapWidth = 8;
const mapHeight = 8;

// Load the tilemap data
const tilemapData = TileMaps["entrance01"].layers[0].data;

// Create an instance of the Tileset class (assuming the Tileset class is available)
function loadImage(src) {
  const img = new Image();
  img.src = src;
  return img;
}

const img = loadImage(
  "/personalProject/DungeonGeneratorCode/dungeonGenerator/img/assets/AmpPlains.png"
);

img.onload = function () {
    const tileset = new Tileset(img);
  
    // Loop through the tilemap data and draw the tiles
    let i = 1;
    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        // Check if tileIndex is out of bounds
        const tileIndex = tilemapData[y * mapWidth + x] - 1; // Subtract 1 because tilemap data is 1-based
        const tileX = tileset.tileData.loc[tileIndex].x;
        const tileY = tileset.tileData.loc[tileIndex].y;
    //    console.log("x:", x, "y:", y, "tileIndex:", tileIndex, "i:", i);
    
        // Draw the tile onto the canvas
        ctx.drawImage(
          img, // The tileset image (loaded previously)
          tileX, // X position of the tile in the tileset
          tileY, // Y position of the tile in the tileset
          tileSize, // Width of the tile
          tileSize, // Height of the tile
          x * tileSize, // X position to draw on the canvas
          y * tileSize, // Y position to draw on the canvas
          tileSize, // Width to draw on the canvas
          tileSize // Height to draw on the canvas
        );
      }
    }
  };
  
