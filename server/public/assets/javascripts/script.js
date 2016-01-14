/**
 * Created by kmjosephs on 1/14/16.
 */
var namahApp = angular.module('namahApp', []);

namahApp.controller('DictionaryCtrl', ['$scope', '$http', function($scope, $http){
    $http({
        method: 'GET',
        url: '/dictionaryRoute'
    }).then(function(data){
        console.log(data);
        $scope.dictionaries = data.data;
    })
}]);

namahApp.controller('LemmaCtrl', ['$scope', '$http', function($scope, $http){
    $http({
        method: 'GET',
        URL:'/lemmaRoute'
    }).then(function(data){
        $scope.lemmas = data.data;
    })
}]);