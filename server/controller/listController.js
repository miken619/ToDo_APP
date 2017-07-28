const db = require('../db');

module.exports = {
  fetchLists: (req, res) => {
    db.List.findAll({})
      .then(data => {
        res.status(200).send(data);
        console.log('Successfully fetched all lists');
    })
      .catch(err => {
        res.status(500).send(err);
        console.log('Error in fetching lists');
    });
  },
  createList: (req, res) => {
    deb.List.findOrCreate({
      where: {
        name: req.body.name
      }
    })
      .spread((newList, created) => {
        if (created) {
          res.status(200).send(newList);
          console.log('Successfuly created all lists');
        } else {
          res.status(500).send('List already exists');
          console.log('List already exists');
        }
    })
      .catch(err => {
        res.status(500).send(err);
        console.log('Error in creating lists');
    });
  }
};