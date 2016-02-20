/**
 * Created by Zaki on 29/01/2016.
 */
angular.module('AnnonceReservationModule')
  .controller('AnnonceReservationController',  ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {



    $scope.getVal = function(Object){
     $scope.myData = Object.text;
    }

    $scope.book = function(annonce){
      var myId = annonce.id;
      var nbPlace = annonce.nbrePlace;
      //alert(myId);

      var currnbre =  nbPlace - $scope.myData;
      $http.post('/reservation', {
        idUser : document.getElementById("idUs").value,
        idAnnonce : myId,
        nbrPlaceRes : $scope.myData,
        date:new Date(),
        confirm:1

      })
        .then(function onSuccess(sailsResponse) {

          alert("Réservation réussie! vous pouvez toujours l'annuler en accedant à l'onglet : Gérer mes réservations");

          $http.get('/annonce/update/' + myId + '?nbrePlace=' + currnbre).success(function (data) {
          }).
            error(function (data, status, headers, config) {
              alert(data.summary);
            });
          window.location.reload();

        })
        .catch(function onError(sailsResponse) {


          alert("error");
          //window.location.reload();

        })
    }

    $http.get('/annonce/find').success(function (data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      $scope.annonces = data;

    });


    $http.get('/ville/find').success(function (data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      $scope.villes = data;

    });

  }]);
