require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
const mongoose = require("mongoose");
const connection = require("./db");
const app = express();

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoute);
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	username: String,
	password: String,
  });
  const User = mongoose.model("User", userSchema);
  // make projectSchema with name string adnd description string and tasks array of objects
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  tasks: [
    {
      name: String,


    },
  ],
  userid: String
  })
const Project = mongoose.model("Project", projectSchema);






app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(res.body);
  const user = await new User(req.body);
  await user.save((e, data) => {
    if (e) {
      res.send(e);
    } else {
      res.send(data);
      console.log(data);
    }
  });
});
app.post("/login", async (req, res) => {
  console.log(req.body);
  const user = await User.find(req.body);
  if (user[0]) {
    let { username, password, _id } = user[0];
    let data = {
      username,
      password,
      login: true,
      userid: _id,
    };
    res.send(data);
  }
  else{
    console.log('not found')
  }
});
// // make a new post api for project and task
app.post("/:userid/project", async (req, res) => {
  
  console.log(req.body,);
  const id=req.params.userid;
  const project={
...req.body,
userid:id    
  }
  const newProject = await new Project(project);
  await newProject.save((e, data) => {
    if (e) {
      res.send(e);
    } else {
      res.send(data);
      console.log(data);
    }
  })}


  );
app.get("/:userid/project",async(req,res)=>{
  const id=req.params.userid;
  const project=await Project.find({userid:id})
  res.send(project)
})
  



app.patch("/:userid/project/:id",async(req,res)=>{
    const id=req.params.id;
  const userid=req.params.userid;
  const project={
    ...req.body,
    userid:userid
  }
  const newProject = await Project.findByIdAndUpdate({_id:id,userid},project);
  res.send(newProject);
  



})












const port = process.env.PORT || 8080;
app.listen(port, async() =>{
	  try {
    await connection;
    console.log(`Listenting on port ${port}...`);
  } catch {
    console.log("runtime err");
  }
}

);
