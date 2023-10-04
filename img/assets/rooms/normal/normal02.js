(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("normal02",
{ "compressionlevel":-1,
 "height":12,
 "infinite":false,
 "layers":[
        {
         "data":[454, 66, 2684354604, 2684354604, 64, 455,
            36, 2684354604, 2684354604, 2684354604, 2684354604, 34,
            36, 2684354604, 2684354604, 2684354604, 2684354604, 34,
            36, 2684354604, 214, 95, 95, 396,
            36, 2684354604, 2684354604, 2684354604, 2684354604, 34,
            36, 2684354604, 2684354604, 2684354604, 2684354604, 34,
            394, 95, 95, 2684354745, 2684354604, 34,
            36, 2684354604, 2684354604, 2684354604, 2684354604, 64,
            36, 2684354604, 2684354604, 2684354604, 2684354604, 2684354604,
            36, 2684354604, 2684354604, 2684354604, 2684354604, 2684354604,
            36, 2684354604, 2684354604, 2684354604, 2684354604, 4,
            484, 6, 2684354604, 2684354604, 4, 485],
         "height":12,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":6,
         "x":0,
         "y":0
        }],
 "nextlayerid":2,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":24,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/Amp Plains.tsx"
        }],
 "tilewidth":24,
 "type":"map",
 "version":"1.10",
 "width":6
});