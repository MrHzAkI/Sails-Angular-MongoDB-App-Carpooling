/**
 * ReservationController
 *
 * @description :: Server-side logic for managing reservations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  reservation:function (req, res){
    Reservation.create({
      ownerUsRes: req.param("idUser"),
      ownerAn: req.param("idAnnonce"),
      dateReservation: req.param("date"),
      confirmReservation: req.param("confirm"),
      nbrePlaceRes: req.param("nbrPlaceRes")


    }).exec(res.send(200));



  }


};

