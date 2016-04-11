angular.module('app').factory('filmFactory',function(){
var films =[
  {title:'La ligne verte',image:'film2.jpg',realisateur:'Frank Darabont',acteur:'Tom Hanks'},
  {title:'Forrest Gump',image:'film1.jpg',realisateur:'Robert Zemeckis',acteur:'Tom Hanks'},
  {title:'Django',image:'film3.jpg',realisateur:'	Quentin Tarantino',acteur:'Jamie foxx'},
];

var getFilms=function(){
  return films;
};
var addFilm = function(film){
  films.push({title:film.title,image:film.image,realisateur:film.realisateur,acteur:film.acteur})
};
return{
  getFilms:getFilms,
  addFilm:addFilm
}
});
