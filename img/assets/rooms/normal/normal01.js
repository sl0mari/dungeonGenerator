(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("normal01",
{ "compressionlevel":-1,
 "height":6,
 "infinite":false,
 "layers":[
        {
         "data":[454, 65, 71, 365, 68, 65, 68, 66, 44, 44, 64, 455,
            66, 44, 44, 124, 44, 44, 44, 44, 44, 44, 44, 64,
            44, 44, 44, 124, 44, 44, 185, 44, 44, 44, 44, 44,
            44, 44, 44, 245, 44, 44, 124, 44, 44, 44, 44, 44,
            6, 44, 44, 44, 44, 44, 124, 44, 44, 44, 44, 4,
            484, 11, 5, 5, 11, 11, 425, 8, 5, 5, 8, 485],
         "height":6,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":12,
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
 "width":12
});