/**
* Role.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      idRole: {
        type: 'integer',
        autoIncrement: true,
        primaryKey: true,
        required: true
      },
      nomRole: {
        type: 'string',
        required: true,
        unique: true
      },
    roles:{
      collection: 'user',
      via: 'owner'
    }



  }
};

