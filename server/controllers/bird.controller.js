const Bird = require('../models/bird.model');

// Create One
const createOne = (req, res) => {
  Bird.create(req.body)
    .then(bird => res.status(201).json(bird))
    .catch(err => res.status(400).json(err));
};

// Find All
const findAll = (req, res) => {
  Bird.find()
    .then(birds => res.status(200).json(birds))
    .catch(err => res.status(400).json(err));
};

//Find One
const findOne = (req, res) => {
  const { id } = req.params;
  Bird.findById(id)
    .then(bird => res.status(200).json(bird))
    .catch(err => res.status(400).json(err));
};

//Update One
const updateOne = (req, res) => {
  const { id } = req.params;
  Bird.findByIdAndUpdate(id, req.body, {new: true, runValidators: true })
    .then(bird => res.status(200).json(bird))
    .catch(err => res.status(400).json(err));
};

//Delete One
const deleteOne = (req, res) => {
  const { id } = req.params;
  Bird.findByIdAndDelete(id)
    .then(bird => res.status(200).json(bird))
    .catch(err => res.status(400).json(err));
};

module.exports = { createOne, findAll, findOne, updateOne, deleteOne };