/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	showHomePage: function (req, res) {

    // If not logged in, show the public view.
    if (!req.session.me) {
      return res.view('homepage');
    }

    // Otherwise, look up the logged-in user and show the logged-in view,
    // bootstrapping basic user data in the HTML sent from the server

    User.findOne(req.session.me, function (err, user){
      var isAdmin = user.admin;
      if (err) {
        return res.negotiate(err);
      }

     else if (!user) {
        sails.log.verbose('Session pointe vers un utlisateur qui dorénavant n\'existe pas, essayez de vous reconnecter?');
        return res.view('homepage');
      }

      else if(!isAdmin){
        return res.view('dashboard', {
        me: {
          id: user.id,
          name: user.nomUser,
          email: user.emailUser,
          tel: user.telUser,
          isAdmin: user.admin,
          gravatarUrl: user.gravatarUrl
        }
      });}

else{
      return res.view('admin', {
        me: {
          id: user.id,
          name: user.nomUser,
          email: user.emailUser,
          tel: user.telUser,
          isAdmin: user.admin,
          gravatarUrl: user.gravatarUrl
        }
      });}

    });
  },

};
