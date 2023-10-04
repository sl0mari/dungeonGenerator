(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("hub01",
{ "compressionlevel":-1,
 "height":16,
 "infinite":false,
 "layers":[
        {
         "data":[454, 66, 44, 44, 64, 65, 71, 71, 68, 71, 65, 66, 44, 44, 64, 455,
            36, 13, 44, 44, 44, 44, 14, 44, 44, 14, 44, 44, 44, 44, 15, 40,
            39, 43, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 50, 44, 45, 40,
            36, 44, 44, 47, 44, 584, 44, 44, 44, 44, 44, 44, 44, 44, 45, 37,
            36, 43, 44, 44, 44, 44, 44, 44, 584, 44, 584, 44, 44, 44, 44, 34,
            39, 44, 50, 44, 44, 44, 224, 44, 44, 44, 44, 44, 44, 44, 44, 34,
            66, 44, 44, 44, 44, 584, 4, 11, 8, 6, 44, 44, 44, 44, 44, 64,
            44, 44, 44, 44, 44, 44, 37, 41, 38, 42, 44, 44, 44, 50, 44, 44,
            44, 44, 44, 224, 44, 44, 40, 38, 35, 39, 44, 44, 44, 584, 584, 44,
            6, 44, 44, 44, 44, 44, 64, 71, 68, 66, 44, 44, 44, 44, 44, 4,
            42, 43, 44, 44, 44, 44, 44, 44, 44, 44, 44, 224, 44, 44, 45, 40,
            42, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 47, 44, 44, 44, 37,
            36, 43, 44, 50, 44, 44, 44, 44, 44, 50, 44, 44, 44, 44, 44, 34,
            39, 44, 44, 44, 44, 44, 44, 224, 44, 44, 44, 44, 44, 53, 45, 37,
            39, 73, 584, 44, 44, 44, 74, 44, 74, 44, 74, 44, 44, 44, 75, 34,
            484, 6, 44, 44, 4, 5, 8, 11, 11, 5, 8, 6, 44, 44, 4, 485],
         "height":16,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
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
 "width":16
});