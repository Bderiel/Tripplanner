const express = require('express');
const router = express.Router();
module.exports = router;
const db = require("../models").db;
const Place = require("../models").Place;
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;

router.get('/', (req, res, next) => {
    const proArr = [];
    proArr.push(Activity.findAll({include: [Place]}));
    proArr.push(Restaurant.findAll({include: [Place]}));
    proArr.push(Hotel.findAll({include: [Place]}));
    Promise.all(proArr)
    .then(([activities, restaurants, hotels]) => {
        // allAttractions.Activity = proArr[0];
        // allAttractions.Restaurant = proArr[1];
        // allAttractions.Hotel = proArr[2];
        res.json({activities, restaurants, hotels});
    })
    .catch(next);
})