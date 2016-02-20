/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {


    nomUser: {
      type: 'string'

    },
    adresseUser: {
      type: 'string'
    },
    ageUser: {
      type: 'integer'
    },
    cinUser: {
      type: 'string'
    },
    emailUser: {
      type: 'string',
      required: true,
      unique: true
    },
    telUser: {
      type: 'string',
      numeric: true
    },
    encryptedPassword: {

    },

    lastLoggedIn: {
      type: 'date',
      defaultsTo: new Date(0)
    },

    admin:{
      type: 'Integer',
      defaultsTo: '0'
    },

    gravatarUrl: {
      type: 'string'
    },
    reservations:{
      collection: 'reservation',
      via: 'ownerUsRes'
    },
    annonces:{
      collection: 'annonce',
      via: 'ownerUs'
    },
    owner: {
      model:'role'
    }
  }
};
