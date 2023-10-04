(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("entrance02",
{ "compressionlevel":-1,
 "height":6,
 "infinite":false,
 "layers":[
        {
         "data":[454, 66, 44, 44, 64, 455,
            66, 13, 14, 14, 15, 64,
            14, 313, 721, 47, 45, 44,
            44, 43, 44, 524, 45, 74,
            6, 73, 44, 74, 75, 4,
            484, 5, 6, 134, 4, 485],
         "height":6,
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
         "source":"C:\/Users\/sssha\/Downloads\/Amp Plains.tsx"
        }, 
        {
         "firstgid":721,
         "source":"..\/..\/utils.tsx"
        }],
 "tilewidth":24,
 "type":"map",
 "version":"1.10",
 "width":6
});