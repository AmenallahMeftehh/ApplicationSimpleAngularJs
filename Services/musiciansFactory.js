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
return{
  getMusicians: getMusicians
};


});
