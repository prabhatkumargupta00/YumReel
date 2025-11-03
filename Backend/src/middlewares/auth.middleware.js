const foodPartnerModel  = require('../models/foodPartner.model')
const jwt = require('jsonwebtoken')

async function authFoodPartnerMiddleware(req, res, next) {

    // This will extract the stored token from user's browser cookie
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Please login first."
        })
    }

    try {
        // this will return the same data using which the token at jwt.sign() was created.
        // here that data is _id ("see the function loginfoodpartner and registerfoodpartner in auth.controller.js")
        const decoded = jwt.verify(token, process.env.JWT_SECRET);      // this will return that same object

        const foodPartner = await foodPartnerModel.findById(decoded.id)

        req.foodPartner = foodPartner;

        next()

    } catch (error) {
        return res.status(401).json({
            message : "Invalid toekn"
        })
    }

}

module.exports = {
    authFoodPartnerMiddleware
}