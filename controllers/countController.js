const Count = require("../models/counter");

const countController = {

  getCount: (req, res) => {
    Count.find({})
      .then(result => {
        if (result.length === 0) {
          res.json({ count: 0 })
        } else {
          return res.json(result[0]);
        }
      })
      .catch(err => {
        return console.error(err);
      });
  },

  increaseCount: (req, res) => {
    Count.find({}, (err, counter) => {
      if (err) return console.error('increaseCount error: ', err);
      if (counter.length === 0) {
        Count.create({ count: 1 })
        .then((result) => res.json(result))
        .catch((err) => console.error(err));
      } else {
        counter[0].count += 1;
        counter[0].save()
        .then((result) => res.json(result))
        .catch((err) => console.error(err));
      }
    });
  }
};

module.exports = countController;
