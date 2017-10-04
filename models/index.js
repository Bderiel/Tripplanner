const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripDB', {logging: false})

const Place = db.define('place', {
    address:{
        type: Sequelize.TEXT
    },
    city: {
        type: Sequelize.TEXT
    },
    state: {
        type: Sequelize.TEXT
    },
    phone: {
        type: Sequelize.TEXT
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT)
    }
})

const Hotel = db.define('hotel',{
    name:{type:Sequelize.TEXT},
    num_stars:{type:Sequelize.FLOAT},
    amenities:{type:Sequelize.TEXT}
    
})

const Restaurant = db.define('restaurant',{
    name:{type:Sequelize.TEXT},
    cuisine:{type:Sequelize.TEXT},
    price: {type:Sequelize.INTEGER}
})

const Activity = db.define('activity',{
    name: {type:Sequelize.TEXT},
    age_range: {type:Sequelize.TEXT}
})

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = {Hotel, Restaurant, Activity, db, Place}