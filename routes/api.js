const router = require("express").Router();
const Exercise = require("../models/exercise");

router.post("/api/exercise", ({ body }, res) => {
  Exercise.create(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/exercise/bulk", ({ body }, res) => {
  Exercise.insertMany(body)
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/exercise", (req, res) => {
  Exercise.find({})
    .sort({ date: -1 })
    .then(dbExercise => {
      res.json(dbExercise);
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
