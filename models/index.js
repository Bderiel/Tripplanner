const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripDB', {logging: false})

const Hotel = db.define('hotel',{
    name:{type:Sequelize.STRING},
    place:{type:Sequelize.JSON},
    num_stars:{type:Sequelize.FLOAT},
    amenities:{type:Sequelize.TEXT}
    
})

const Restaurant = db.define('restaurant',{
    name:{type:Sequelize.STRING},
    place:{type:Sequelize.JSON},
    cuisine:{type:Sequelize.STRING},
    price: {type:Sequelize.INTEGER}
})

const Activity = db.define('activity',{
    name: {type:Sequelize.STRING},
    place: {type:Sequelize.JSON},
    age_range: {type:Sequelize.ENUM('ALL','21+')}
})

module.exports = {Hotel, Restaurant, Activity, db}