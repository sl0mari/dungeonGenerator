class Tileset {
  constructor(img) {
    const extraPx = 4;
    const colomns = 24;
    const rows = 30;
    const offset = 1;
    console.log(extraPx, rows, colomns, offset);
    this.tileData = { loc: [] };
    let tileNumber = 0;
    for (let i = 0; i < colomns; i++) {
      for (let j = 0; j < rows; j++) {
        const positionX = j * 25 + offset;
        const positionY = i * 25 + offset;
        tileNumber++;
        this.tileData.loc.push({ tile: tileNumber, x: positionX, y: positionY });
      }
    }
  }
}

