const express = require("express");
const birdRouter = express.Router();

const {
  createOne,
  findAll,
  findOne,
  deleteOne,
  updateOne,
} = require("../controllers/bird.controller");

birdRouter
  .route('/')
  .get(findAll)
  .post(createOne);

birdRouter
  .route('/:id')
  .get(findOne)
  .put(updateOne)
  .delete(deleteOne);

  module.exports = birdRouter;