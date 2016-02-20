/**
 * Created by Zaki on 07/01/2016.
 */
angular.module('CompteModule')
  .controller('CompteController',  ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {




        $scope.th= {
          'id':'',
          'nomUser':'',
          'emailUser':'',
          'telUser':''
        };
        $scope.modifyAccount = function () {

          var idU = $scope.th.id || document.getElementById("idh").value;
          var nom = $scope.th.nomUser || document.getElementById("nom").value ;
          var mail = $scope.th.emailUser|| document.getElementById("email").value ;
          var tel = $scope.th.telUser|| document.getElementById("tel").value ;


          $http.get('/user/update/' + idU + '?emailUser=' + mail + '&nomUser=' + nom + '&telUser=' + tel).success(function (data) {

            document.getElementById("Model2.name").innerText = nom;
            document.getElementById("Model3.mail").innerText = mail;
            document.getElementById("Model4.tel").innerText = tel;

            removeModal();
          }).
            error(function (data, status, headers, config) {
              alert(data.summary);
            });




        }





        function removeModal() {
          $('.modal').modal('hide');
        };



  }]);
