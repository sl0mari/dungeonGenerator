(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("reward01",
{ "compressionlevel":-1,
 "height":8,
 "infinite":false,
 "layers":[
        {
         "data":[454, 71, 66, 43, 45, 64, 68, 455,
            42, 13, 44, 44, 44, 44, 735, 40,
            39, 44, 770, 44, 44, 44, 765, 40,
            39, 763, 44, 44, 770, 44, 44, 64,
            42, 763, 44, 44, 44, 44, 765, 44,
            39, 44, 773, 44, 44, 770, 44, 44,
            42, 823, 44, 794, 44, 44, 825, 4,
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
        }, 
        {
         "firstgid":721,
         "source":"C:\/Users\/sssha\/Downloads\/Amp Plains.tsx"
        }],
 "tilewidth":24,
 "type":"map",
 "version":"1.10",
 "width":8
});