(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("reward02",
{ "compressionlevel":-1,
 "height":8,
 "infinite":false,
 "layers":[
        {
         "data":[454, 71, 66, 43, 45, 64, 68, 455,
            42, 13, 44, 44, 44, 44, 15, 40,
            39, 44, 44, 44, 44, 44, 45, 40,
            66, 43, 44, 44, 44, 47, 44, 34,
            44, 43, 44, 44, 50, 44, 45, 34,
            44, 44, 44, 44, 44, 74, 44, 34,
            6, 103, 44, 74, 44, 44, 105, 34,
            484, 5, 8, 11, 5, 11, 5, 485],
         "height":8,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":8,
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
         "source":"C:\/Users\/sssha\/Downloads\/Amp Plains.tsx"
        }],
 "tilewidth":24,
 "type":"map",
 "version":"1.10",
 "width":8
});