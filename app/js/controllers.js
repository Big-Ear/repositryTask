'use strict';
var app = angular.module('app', []);

app.service('GetListRepo', function($http) {
  this.list=function(){
    return $http.get("https://api.github.com/repositories") ;
	 };

});

app.controller('ListPublicRepoCtrl', function($scope, GetListRepo) {
  $scope.getList = function() {
   var promise=GetListRepo.list();
   promise.success(
     function(response){
       $scope.list=response;
     }
   );
  }
});

app.directive('repo',function(){
  return {
    restrict: "E",
    scope:{
      item:"="
    },
    template:'<div class="media-left media-middle"><img src={{item.owner.avatar_url}} height="200px" weight="200px"/></div> <div class="media-body"><h4>{{item.name}}</h4> {{item.owner.login}}   {{item.html_url}}</div><div><a href="">jfjfjf</a></div>'
}
  }

);

app.directive('list', function(){
  return{
  restrict:"E",
  scope:{
    item:"=",
    ord:"="
  },
  template:' <div class="media" ng-repeat="x in item | orderBy:ord" > <repo item="x"></repo></div>'


  }
});
