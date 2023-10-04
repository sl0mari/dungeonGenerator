(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("exit01",
{ "compressionlevel":-1,
 "height":8,
 "infinite":false,
 "layers":[
        {
         "data":[454, 71, 71, 65, 65, 68, 68, 455,
            39, 13, 44, 44, 14, 47, 15, 37,
            39, 50, 44, 44, 44, 44, 45, 34,
            36, 43, 44, 44, 729, 44, 44, 40,
            36, 44, 44, 44, 44, 44, 53, 34,
            39, 43, 44, 44, 44, 50, 45, 37,
            36, 73, 44, 44, 44, 44, 75, 40,
            484, 8, 6, 44, 44, 4, 11, 485],
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
         "source":"..\/..\/Amp Plains.tsx"
        }, 
        {
         "firstgid":721,
         "source":"..\/..\/utils.tsx"
        }],
 "tilewidth":24,
 "type":"map",
 "version":"1.10",
 "width":8
});