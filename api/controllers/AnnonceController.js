/**
 * AnnonceController
 *
 * @description :: Server-side logic for managing annonces
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  annonce: function (req, res) {

    Annonce.create({
      ownerUs: req.param("idUser"),
      villeDepart: req.param("villeDep"),
      villeArrivee: req.param("villeArr"),
      dateDepart: req.param("DateDep"),
      dateArriveePrevue: req.param("DateArr"),
      prixParPersonne: req.param("prix"),
      nbrePlace: req.param("nbrPlace")


    }).exec(res.send(200));

  }

};

