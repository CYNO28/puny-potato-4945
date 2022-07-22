const router = require("express").Router();
const { application, json } = require("express");
const passport = require("passport");
const mongoose=require('mongoose');
const GuserSchema=new mongoose.Schema({
    user:String,
    email:String    
})
const Guser=mongoose.model('Guser',GuserSchema)
router.get("/login/success", async(req, res) => {
	if (req.user) {
		
	
	
		let user=req.user
        let name=user.name.givenName+' '+user.name.familyName
        
        const newuser=await Guser.find({user:name,email:user.emails[0].value})
		if(newuser[0]){
			console.log('user already exists')
			//  res send user id
			// res.send(newuser[0]._id)
			console.log(newuser[0]._id)
			res.status(200).json({
				error: false,
				message: "Successfully Loged In",
				user: req.user,
				id:newuser[0]._id
	
			})
		}
		else{
			const newuser=await new Guser({user:name,email:user.emails[0].value})
        	newuser.save()
			// res.send(newuser._id)
			console.log(newuser._id)
			res.status(200).json({
				error: false,
				message: "Successfully Loged In",
				user: req.user,
				id:newuser._id
	
			})
		}
		

       
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

router.get("/logout", async(req, res) => {
	 req.logout();
	res.redirect(process.env.CLIENT_URL);
});




module.exports = router;
