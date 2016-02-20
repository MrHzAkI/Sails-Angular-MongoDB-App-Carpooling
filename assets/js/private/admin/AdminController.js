/**
 * Created by Zaki on 29/12/2015.
 */
angular.module('AdminModule')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/")

    $stateProvider
      .state('Admin', {
        url: "/",
        templateUrl: "../../../admin/index.html"

      })
      .state('Admingst', {
        url: "/Admin",
        templateUrl: "../../../admin/admin/Admin.html",
        controller: "AdminController"
      })
      .state('Villegst', {
        url: "/Ville",
        templateUrl: "../../../admin/ville/Ville.html",
        controller: "VilleController"
      });


  })

  .controller('AdminController', [ function($scope){
/*    $scope.Stat  = $scope.Stat  || {id : 'test'};
    $scope.Stat2 = $scope.Stat2 || {name: 'test'};
    $scope.Stat3 = $scope.Stat3 || {mail: 'test'};
    $scope.Stat4 = $scope.Stat4 || {tel: 'test'};*/

  }]);
angular.module('AdminModule')
  .run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ])
