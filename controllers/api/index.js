const router = require("express").Router();

// Import all of the routes from /api/ here
const userRoutes = require("./userRoutes");
const exampleDataRoutes = require("./exampleDataRoutes");

// Connect the routes to the router here
router.use("/users", userRoutes);
router.use{"/myBlogs", myBlogRoutes};
router.use("/myEventRoutes", myEventRoutes);
router.use("/events", eventRoutes);
router.use("/posts", postRoutes);
router.use("/hobbies", hobbiesRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);


// router.use("/exampleData", exampleDataRoutes);

module.exports = router;
