const getAll = (req, res) => {
  req.db
    .collection("pokemon")
    .find()
    .toArray((err, results) => {
      if (err) {
        return res.status(500).json({ message: "Failed to get all" });
      }
      return res.json(results);
    });
};

const getOne = (req, res) => {
  req.db
    .collection("pokemon")
    .find({ "data.pokemon.name": req.params.pokemon })
    .toArray((err, results) => {
      if (err) {
        return res.status(500).json({ message: "Failed to get all" });
      }
      return res.json(results);
    });
};
module.exports = { getAll, getOne };
