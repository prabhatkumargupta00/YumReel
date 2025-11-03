const foodModel = require('../models/food.model')


async function createFood(req, res) {
    console.log(req.foodPartner)

    // here the server can't read file like image, video, pdf etc. that's why we use multer,
    // after using multer the data like name and desc. that is string can be accessed by using req.body
    // but the file like image, video etc. can be accessed in " req.file "
    console.log(req.body)
    console.log(req.file)

    
    res.send("food posted successfully.")
}


module.exports = {
    createFood
}