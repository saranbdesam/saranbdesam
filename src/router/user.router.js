const router = require("express").Router();
const Usermodel = require("../model/user.model");
const {registerValidation} = require("../validation/user.validation");
const {errorformat} = require ("../controller")
router.post('/register',(req,res)=>{
    try{
        let error = registerValidation(req.body);
        console.log(error);
        if (error){
            console.log(error);
            return res.status(200).send(errorformat(error.message));}
        else res.send(error);
    }catch(err){
        console.log(err);
        res.send(err.message);
    }
})
module.exports = router;