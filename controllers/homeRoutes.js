const router = require("express").Router();

// Import any models you plan to use for data's routes here
const { ExampleData, User, Hobby,Event, UserHobbies } = require("../models/");

// If you would like to use an authGuard middleware, import it here

// add a get / (landing page) route here
router.get("/user/:id", async (req, res) => {
  try {
    // const exampleData = await ExampleData.findAll({
    //   include: [User],
    // });

    // const examples = exampleData.map((example) => example.get({ plain: true }));

    // Reminder- We're passing the examples data to the home handlebars template here!
    // Reminder- We're also passing the loggedIn status to the home template here so that we can conditionally render items if the user is logged in or not (like we do with the navbar using `{{if loggedIn}}`).
    // const userData = await User.findByPk(req.params.id, {
    //   include: [
    //     {model: Hobby, 
    //     attributes:[
    //       'id',
    //       'hobby_name',
    //     ] },{model: Event,
    //       attributes:[
    //         'id',
    //         'title',
    //         'location',
    //         'event_time',
    //       ]
    //     },
    //     {
    //       model: UserHobbies, 
    //       attributes:[
    //         'hobby_id',
    //         'user_id',
    //       ]
    //     },]
    // });
    // console.log(userData);
    // const userHobbies = userData.map((hobbies) =>{
            
    // })
    const UserHobbiesData = await UserHobbies.findAll({where:{user_id:req.params.id}});
    const hobbies = UserHobbiesData.map((hobby)=> hobby.get({plain:true}));
    console.log(hobbies); 
    let hobbyArray = [];
     for(let i = 0; i<hobbies.length;i++){
      let hobbyToPush =await Hobby.findByPk(hobbies[i].hobby_id);
      const hobby = hobbyToPush.get({plain: true});
      hobbyArray.push(hobby);
    
  };
  console.log(hobbyArray);
    res.render("home", {
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
