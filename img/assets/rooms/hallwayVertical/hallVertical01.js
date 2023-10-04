(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("hallVertical01",
{ "compressionlevel":-1,
 "height":4,
 "infinite":false,
 "layers":[
        {
         "data":[36, 43, 403, 37,
            39, 403, 45, 40,
            42, 73, 403, 37,
            39, 403, 105, 34],
         "height":4,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":4,
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
 "width":4
});