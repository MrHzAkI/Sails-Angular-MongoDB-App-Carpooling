/**
* Annonce.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    dateArriveePrevue : {
      type: 'string',
      //required: true
    },
    dateDepart: {
      type: 'string',
      //required: true
    },
    nbrePlace: {
      type: 'integer',
      //required: true
    },
    prixParPersonne: {
      type: 'float',
      //required: true
    },
    villeDepart: {
      type: 'string',
      //required: true
    },
    villeArrivee: {
      type: 'string',
      //required: true
      //required: true
    },
    reservations:{
      collection: 'reservation',
      via: 'ownerAn'
    },
    ownerUs: {
      model:'user'
    }



  }
};

