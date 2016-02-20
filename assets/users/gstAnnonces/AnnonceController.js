/**
 * Created by Zaki on 07/01/2016.
 */
angular.module('AnnonceModule')
  .controller('AnnonceController',  ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {

    $scope.currentDate = new Date();
    $scope.delete =function(data){
      if (confirm('Etes-vous sûrs de vouloir supprimer cette annonce?')) {
        $http['delete']('/annonce/' + data.id).success(function () {
          $scope.annonces.splice($scope.annonces.indexOf(data), 1);
        });
      }


    }


    $scope.addAnnonce = function () {

      $http.post('/annonce', {
        idUser : document.getElementById("idU").value,
        villeDep: $scope.annonce.villeDep,
        villeArr: $scope.annonce.villeArr,
        DateDep: $scope.annonce.dateDepart,
        DateArr: $scope.annonce.dateArriveePrevue,
        prix: $scope.annonce.prixParPersonne,
        nbrPlace: $scope.annonce.nbrePlace

      })
        .then(function onSuccess(sailsResponse) {


          window.location.reload();

        })
        .catch(function onError(sailsResponse) {

          alert("error");
          //window.location.reload();

        })

    }

    $http.get('/ville/find').success(function (data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      $scope.villes = data;

    });
    $http.get('/annonce/find').success(function (data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      $scope.annonces = data;

    });

    function removeModal() {
      $('.modal').modal('hide');
    };



  }]);
