/**
 * Created by safaa on 01/01/2016.
 */
angular.module('VilleModule')
  .controller('VilleController', function ($scope, $http) {
    function resetItem() {
      $scope.ville = {
        nomVille: '',
        id: ''
      };
      $scope.displayForm = '';

    }

    resetItem();

    $scope.addItem = function () {
      resetItem();
      $scope.displayForm = true;
    }


    $scope.saveItem = function () {
      var vil = $scope.ville;
      if (vil.id.length == 0) {
        $http.get('/ville/create?nomVille=' + vil.nomVille).success(function (data) {
          $scope.items.push(data);
          $scope.displayForm = '';
          removeModal();
        }).
          error(function (data, status, headers, config) {
            alert(data.summary);
          });
      }
      else {
        $http.get('/ville/update/' + vil.id + '?nomVille=' + vil.nomVille).success(function (data) {
          $scope.displayForm = '';
          removeModal();
        }).
          error(function (data, status, headers, config) {
            alert(data.summary);
          });
      }
    };

    $scope.editItem = function (data) {
      $scope.ville = data;
      $scope.displayForm = true;
    }

    $scope.removeItem = function (data) {
      if (confirm('Etes-vous sûrs de vouloir supprimer cette ville?')) {
        $http['delete']('/ville/' + data.id).success(function () {
          $scope.items.splice($scope.items.indexOf(data), 1);
        });
      }
    };

    $http.get('/ville/find').success(function (data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      $scope.items = data;
    });

    function removeModal() {
      $('.modal').modal('hide');
    };
  });
