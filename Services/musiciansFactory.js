angular.module("app").factory("musiciansFactory",function(){
var musicians=[
{id:1,fullName:'Beyonce',title:'Halo',image:'film2.jpg'},
{id:2,fullName:'Pharrell Williams',title:'Happy',image:'téléchargement.jpg'},
{id:3,fullName:'Jessie J',title:'Price tag',image:'téléchargement (1).jpg'},
{id:4,fullName:'Katy Perry',title:'Firework',image:'téléchargement (2).jpg'}
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
