angular.module("app").directive("musician",function(){
return{
  restrict: 'E',
  templateUrl:'templates/musician.html',
  replace : true,
  scope:{
    artist : '=artist'
  }
}

})
