const express = require("express");

const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    console.log(cars);
    res.status(200).json({ message: "Cars retrieved", cars });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving cars" });
  }
});

router.post("/", async (req, res) => {
  const postCar = req.body;
  try {
    const car = await db("cars").insert(postCar);
    res.status(201).json({ message: "Successfully added car", car });
  } catch (err) {
    res.status(500).json({ message: "Error adding cars" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateCar = await db("cars")
      .where({ id })
      .update(req.body);
    res.status(200).json({ update: updateCar });
  } catch (err) {
    res.status(500).json({ message: "Error updating car" });
  }
});

router.delete('/:id', async (req, res) => {
    try {
        const delCar = await db('cars')
        .where('id', req.params.id)
        .del();
        res.json({deletedRecords: delCar});
    } catch(err) {
        res.status(500).json({ message: "Error deleting car" });
    }
});

module.exports = router;
