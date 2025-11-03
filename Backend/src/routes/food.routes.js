const express = require('express')
const foodController = require('../controllers/food.controllers')
const authMiddleware = require('../middlewares/auth.middleware')
const multer = require('multer')

const upload = multer({
    storage: multer.memoryStorage()
})

const router = express.Router()

//  /api/food  [protected -> means there will be an auth middleware used.]

router.post('/', 
    authMiddleware.authFoodPartnerMiddleware, 
    upload.single('video'), 
    foodController.createFood)













module.exports = router;