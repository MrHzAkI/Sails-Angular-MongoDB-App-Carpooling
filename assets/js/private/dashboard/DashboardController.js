angular.module('DashboardModule')

  .config(function ($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise("/")

    $stateProvider
      .state('AnnonceReservation', {
        url: '/',
        //template: '<h1>Annonce</h1>'
        templateUrl: "../../../users/resAnnonces/index.html",
        controller: "AnnonceReservationController"

      })
      .state('Annonce', {
        url: '/mesAnnonces',


        templateUrl: "../../../users/gstAnnonces/mesAnnonces.html",
        controller: "AnnonceController"
      })
      .state('Compte', {
        url: '/monCompte',

        templateUrl: "../../../users/gstCompte/monCompte.html",
        controller: "CompteController"
      })
      .state('Reservation', {
        url: '/mesReservations',
        //template: '<h1>Annonce</h1>'

        templateUrl: "../../../users/gstReservations/mesReservations.html",
        controller: "ReservationController"
      });


  })
  .controller('DashboardController', function ($scope) {
    $scope.Model = $scope.Model || {id : currentId};
    $scope.Model2 = $scope.Model2 || {name: currentName};
    $scope.Model3 = $scope.Model3 || {mail: currentMail};
    $scope.Model4 = $scope.Model4 || {tel: currentTel};
  });
angular.module('DashboardModule')
  .run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ])
