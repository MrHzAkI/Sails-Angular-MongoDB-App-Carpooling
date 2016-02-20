/**
 * Created by Zaki on 07/01/2016.
 */
angular.module('ReservationModule')
  .controller('ReservationController',  ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {
    $scope.delete =function(reservation){

      var currentNbre = reservation.nbrePlaceRes + reservation.ownerAn.nbrePlace;

      if (confirm('Etes-vous sûrs de vouloir annuler cette réservation?')) {
        $http['delete']('/reservation/' + reservation.id).success(function () {
          $scope.reservations.splice($scope.reservations.indexOf(reservation), 1);
      $http.get('/annonce/update/' + reservation.ownerAn.id + '?nbrePlace=' + currentNbre).success(function (data) {
      }).
      error(function (data, status, headers, config) {
      alert(data.summary);
      });
        });
      }
    }


      $http.get('/annonce/find').success(function (data) {
        for (var i = 0; i < data.length; i++) {
          data[i].index = i;
        }
        $scope.annonces = data;

      });
      $http.get('/reservation/find').success(function (data) {
        for (var i = 0; i < data.length; i++) {
          data[i].index = i;
        }
        $scope.reservations = data;

      });




  }]);
