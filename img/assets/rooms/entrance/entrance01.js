(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("entrance01",
{ "compressionlevel":-1,
 "height":8,
 "infinite":false,
 "layers":[
        {
         "data":[35, 454, 66, 14, 44, 64, 455, 35,
            454, 66, 13, 44, 44, 15, 64, 455,
            66, 13, 44, 44, 44, 44, 15, 64,
            43, 44, 44, 44, 44, 44, 44, 45,
            43, 44, 44, 44, 44, 44, 44, 45,
            6, 73, 44, 44, 44, 44, 75, 4,
            484, 6, 73, 44, 44, 75, 4, 485,
            35, 484, 6, 44, 74, 4, 485, 35],
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
         "source":"C:\/Users\/sssha\/Downloads\/flurmimons_tileset___caves_by_flurmimon_dafqtdm-414w-2x.tsx"
        }, 
        {
         "firstgid":2421,
         "source":"C:\/Users\/sssha\/Downloads\/large.tileset38_dpc.tsx"
        }, 
        {
         "firstgid":2821,
         "source":"..\/..\/utils.tsx"
        }],
 "tilewidth":24,
 "type":"map",
 "version":"1.10",
 "width":8
});