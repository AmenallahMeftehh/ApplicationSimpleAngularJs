angular.module('app').factory('serieFactory',function(){
var series=[
{nom:'Game of thrones',image:'gameofthrones.jpg',description:"Dans un pays où l'été peut durer plusieurs années et l'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. Pendant ce temps, complots et rivalités se jouent sur le continent pour s'emparer du Trône de Fer, le symbole du pouvoir absolu."},
{nom:'The walking dead',image:'walkingdead.jpg',description:"Après une apocalypse ayant transformé la quasi-totalité de la population en zombies, un groupe d'hommes et de femmes mené par l'officier Rick Grimes tente de survivre"},
{nom:'Mr Robots',image:'mrrobot.jpg',description:"Elliot est un jeune programmeur anti-social qui souffre d'un trouble du comportement qui le pousse à croire qu'il ne peut rencontrer des gens qu'en les hackant."},
{nom:'Narcos',image:'narcos.jpg',description:"Loin d’un simple biopic de Pablo Escobar, la série hyper-réaliste Narcos explore en profondeur le monde violent des cartels et de la cocaïne en se basant sur des faits réels."},
{nom:'Empire',image:'empire.jpg',description:"Lucious Lyon, ancienne star du hip-hop, est devenu en l'espace d'une vingtaine d'années l'un des plus riches producteurs de disques Américains. Atteint d'une grave maladie, ses jours sont comptés. Il ne lui reste donc plus beaucoup de temps pour désigner son successeur parmi ses trois fils"}
];
var addSerie=function(serie){
  series.push({nom:serie.nom,description:serie.description})
};
var getSeries=function(){
  return series;
};
return{
  addSerie:addSerie,
  getSeries:getSeries
}
})
