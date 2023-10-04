(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("bossFoyer01",
{ "compressionlevel":-1,
 "height":8,
 "infinite":false,
 "layers":[
        {
         "data":[454, 68, 66, 44, 44, 64, 68, 455,
            39, 53, 44, 44, 44, 44, 50, 37,
            39, 44, 47, 44, 44, 44, 45, 37,
            39, 43, 44, 44, 45, 44, 45, 37,
            39, 44, 44, 44, 44, 44, 44, 37,
            39, 43, 44, 44, 44, 47, 44, 37,
            39, 50, 44, 44, 44, 45, 44, 37,
            484, 8, 6, 44, 44, 4, 8, 485],
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
        }],
 "tilewidth":24,
 "type":"map",
 "version":"1.10",
 "width":8
});