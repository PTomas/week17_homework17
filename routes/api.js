const express = require("express")
const router = express.Router();
const Transaction = require("../models/transaction.js");

router.get("/", (req, res) => {
  res.sendFile("index.html")
})

router.post("/api/addWorkout", (res) => {
  console.log("hello")
  const createAndSaveworkout = (done) => {
    let contents = res.body
    let workout = new Transaction(contents)
    workout.save(function(err, data) {
      if (err) console.log(err);
    });
  };
  createAndSaveworkout()
  // Transaction.create(contents)
  //   .catch(err => {
  //     console.log(err);
  //   });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      console.log(dbTransaction)
      res.json({dbTransaction});
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
