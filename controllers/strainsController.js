const db = require("../models");

// Defining methods for the db Controller
module.exports = {
deletebyid: function(req, res) {
  db.Strains
  .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
getAll: function(req, res) {
    db.Strains.find(req.query)
    .sort({rating: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  bynameall: function(req, res) {
    db.Strains.find(req.query)
    .sort({name: 1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("req.body")
    console.log(req.body)
    db.Strains.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Strains.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
// }
};