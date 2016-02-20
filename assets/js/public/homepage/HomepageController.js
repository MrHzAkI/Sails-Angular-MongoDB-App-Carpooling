angular.module('HomepageModule').controller('HomepageController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){


  $scope.currentDate = new Date();


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

	// set-up loginForm loading state
	$scope.loginForm = {
		loading: false
	}

	$scope.submitLoginForm = function (){

    // Set the loading state (i.e. show loading spinner)
    $scope.loginForm.loading = true;

    // Submit request to Sails.
    $http.put('/login', {
      email: $scope.loginForm.email,
      password: $scope.loginForm.password
    })
    .then(function onSuccess (){
      // Refresh the page now that we've been logged in.

      window.location = '/';
    })
    .catch(function onError(sailsResponse) {

      // Handle known error type(s).
      // Invalid username / password combination.
      if (sailsResponse.status === 400 || 404) {
        // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
        //
        toastr.error('adresse mail et/ou mot de passe invalide.', 'Message d\'erreur', {
          closeButton: true
        });
        return;
      }

				toastr.error('Une erreur s\'est survenue. Veuillez réessayer ultérieurement.', 'Erreur inconnue !', {
					closeButton: true
				});
				return;

    })
    .finally(function eitherWay(){
      $scope.loginForm.loading = false;
    });
  };


}]);
