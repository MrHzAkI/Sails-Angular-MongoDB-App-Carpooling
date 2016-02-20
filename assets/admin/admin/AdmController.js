/**
 * Created by safaa on 01/01/2016.
 */
angular.module('AdmModule')
  .controller('AdmController',  ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {
    function resetItem() {
      $scope.user = {
        emailUser: '',
        encryptedPassword: '',
        id: ''
      };
      $scope.displayForm = '';

    }

    resetItem();

    $scope.submitAdminForm = function () {

      $http.post('/admin', {
        emailUser: $scope.admin.emailUser,
        password: $scope.admin.encryptedPassword
      })
        .then(function onSuccess(sailsResponse) {


          window.location.reload();

        })
        .catch(function onError(sailsResponse) {

          // Handle known error type(s).
          // If using sails-disk adpater -- Handle Duplicate Key
          var errEmail = sailsResponse.status == 409;
          var errUnknown = sailsResponse.status == 410;

          if (errEmail || errUnknown) {
            toastr.error('Cette adresse email est déjà prise par un autre utlisateur. Vérifiez vos données avant de réssayer à nouveau!', 'Erreur attribut unique!');
            return;
          }
          window.location.reload();

          /*   else if (cinUserAlreadyInUse) {
           toastr.error('Ce CIN est déjà pris par un autre utlisateur. Vérifiez vos données avant de réssayer à nouveau!', 'Erreur attribut unique!');
           return;
           }
           */
        })
        .finally(function eitherWay() {
          $scope.signupForm.loading = false;
        })
    }

    $scope.addItem = function () {
      resetItem();
      $scope.displayForm = true;
    }


    $scope.saveItem = function () {
      var ad = $scope.user;
      if (ad.id.length == 0) {
        $http.get('/user/create?&emailUser=' + ad.emailUser + '&encryptedPassword' + + ad.encryptedPassword + '&admin' + ad.admin).success(function (data) {
          $scope.items.push(data);
          $scope.displayForm = '';
          removeModal();
        }).
          error(function (data, status, headers, config) {
            alert(data.summary);
          });
      }
      else {
        $http.get('/user/update/' + ad.id + '&emailUser=' + ad.emailUser + '&encryptedPassword' + ad.encryptedPassword).success(function (data) {
          $scope.displayForm = '';
          removeModal();
        }).
          error(function (data, status, headers, config) {
            alert(data.summary);
          });
      }
    };

    $scope.editItem = function (data) {
      $scope.user = data;
      $scope.displayForm = true;
    }

    $scope.removeItem = function (data) {
      if (confirm('Etes-vous sûrs de vouloir supprimer cet admin?')) {
        $http['delete']('/user/' + data.id).success(function () {
          $scope.items.splice($scope.items.indexOf(data), 1);
        });
      }
    };

    $http.get('/user/find').success(function (data) {
      for (var i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      $scope.items = data;
    });

    function removeModal() {
      $('.modal').modal('hide');
    };
  }]);

