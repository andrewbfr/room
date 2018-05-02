const db = require("../models");

/*this exports new methods, which will be called when an API endpoint is given an object with which to create or search the DB

Just making CRUD operations, in order
*/
module.exports = {
     create: function (req,res) {
         db.Molder
         /*this .create is given specifically through the Mongoose NPM*/
            .create(req.body)
            .then(console.log("user created"))
            .catch(err => res.status(422).json(err));
     },

    /* confirm params or query */
     findAll: function (req,res) {
         db.Molder
         /*inquiring about the query, which is additional information passed to the endpoint with which you search the DB*/
            .find(req.query)
            .sort({ date: -1 })
            .then(console.log("users returned"))
            .catch(err => res.status(422).json(err));
     },

    /* confirm params or query */
     findByNom: function (req,res) {
         db.Molder
            .findById(req.params)
            .then(console.log("user returned"))
            .catch(err => res.status(422).json(err));
     },

     /* confirm params or query */
     updateMolder: function (req,res) {
         db.Molder
            .update(req.params.userID)
            .then(console.log("user updated"))
            .catch(err => res.status(422).json(err));
     },
     
     /* confirm params or query */
     deleteMolder: function (req,res) {
         db.Molder
            .remove(req.params.userID)
            .then(console.log("user removed"))
            .catch(err => res.status(422).json(err));
     }
};