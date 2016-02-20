angular.module('SignupModule').controller('SignupController', ['$scope', '$http', 'toastr', function ($scope, $http, toastr) {

  // set-up loading state
  $scope.signupForm = {
    loading: false
  }

  $scope.submitSignupForm = function () {

    // Set the loading state (i.e. show loading spinner)
    $scope.signupForm.loading = true;

    // Submit request to Sails.
    $http.post('/signup', {
      nomUser: $scope.signupForm.nomUser,
      adresseUser: $scope.signupForm.adresseUser,
      ageUser: $scope.signupForm.ageUser,
      cinUser: $scope.signupForm.cinUser,
      telUser: $scope.signupForm.telUser,
      emailUser: $scope.signupForm.emailUser,
      password: $scope.signupForm.password
    })
      .then(function onSuccess(sailsResponse) {
        window.location = '/';
      })
      .catch(function onError(sailsResponse) {

        // Handle known error type(s).
        // If using sails-disk adpater -- Handle Duplicate Key
        var emailAddressAlreadyInUse = sailsResponse.status == 409;
        var er = sailsResponse.status == 400;

        if (emailAddressAlreadyInUse || er) {
          toastr.error('Cette adresse email est déjà prise par un autre utlisateur. Vérifiez vos données avant de réssayer à nouveau!', 'Erreur attribut unique!');
          return;
        }


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

  $scope.submitLoginForm = function () {

    // Set the loading state (i.e. show loading spinner)
    $scope.loginForm.loading = true;

    // Submit request to Sails.
    $http.put('/login', {
      email: $scope.loginForm.email,
      password: $scope.loginForm.password
    })
      .then(function onSuccess() {
        // Refresh the page now that we've been logged in.
        window.location = '/';
      })
      .catch(function onError(sailsResponse) {

        // Handle known error type(s).
        // Invalid username / password combination.
        if (sailsResponse.status === 400 || 404) {
          // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
          //
          toastr.error('Adresse email et/ou mot de passe invalide(s). Vérifiez vos données avant de réssayer à nouveau!', 'Erreur d\'authentification', {
            closeButton: true
          });
          return;
        }

        toastr.error('Une erreur non prévue s\'est produite, Réessayez ultérieurement.', 'Erreur inconnue', {
          closeButton: true
        });
        return;

      })
      .finally(function eitherWay() {
        $scope.loginForm.loading = false;
      });
  };

}]);
