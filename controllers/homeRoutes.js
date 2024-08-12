const router = require("express").Router();

// Import any models you plan to use for data's routes here
const { ExampleData, User, Hobby,Event, UserHobbies } = require("../models/");

// If you would like to use an authGuard middleware, import it here

// add a get / (landing page) route here
router.get("/user/:id", async (req, res) => {
  try {
    
    const profile = await(User.findByPk(req.params.id))
    const UserHobbiesData = await UserHobbies.findAll({where:{user_id:req.params.id}});
    const hobbies = UserHobbiesData.map((hobby)=> hobby.get({plain:true}));
    const name = profile.username;
    console.log(hobbies); 
    let hobbyArray = [];
     for(let i = 0; i<hobbies.length;i++){
      let hobbyToPush =await Hobby.findByPk(hobbies[i].hobby_id);
      const hobby = hobbyToPush.get({plain: true});
      hobbyArray.push(hobby);
    
  };
  
  console.log(name);
  console.log(hobbyArray);
    res.render("home", {
      name,
      hobbyArray,
      loggedIn: req.session.logged_in,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// add a get /login route here
router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

// add a get /signup route here
router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
