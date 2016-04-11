angular.module("app").factory("musiciansFactory",function(){
var musicians=[
{id:1,fullName:'Beyonce',title:'Halo'},
{id:2,fullName:'Pharrell Williams',title:'Happy'},
{id:3,fullName:'Jessie J',title:'Price tag'},
{id:4,fullName:'Katy Perry',title:'Firework'}
];

var getMusicians = function(){
  return musicians;
};
var addMusician = function(musician){
musician = preMusician(musician);
musicians.push({id:musician.id,fullName:musician.fullName,title:musician.title})
}
function preMusician(musician){
  musician.id=musicians.length+1;
  return musician;
}
return{
  getMusicians: getMusicians,
  addMusician :addMusician
};


});
