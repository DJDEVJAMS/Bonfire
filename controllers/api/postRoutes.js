const router = require("express").Router();

// import any models you plan to use for this data's routes here
const { Post } = require("../../models");


router.get('/', async (req, res) => {
    try {
        // Example: Fetch all postData
        const postData = await Post.findAll();
        console.log(postData);
        // res.render('all', { postData });
        res.status(200).json(postData); // Pass postData to the template
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to load Posts' });
    }
});

   
    // } catch (err) {
    //   res.status(500).json(err);
    // }});

router.post('/', async (req, res) => {
    try {
        const postData = await Post.create(req.body,
            { post_title: req.body.post_title,
              post_content: req.body.post_content,
              user_id: req.session.user_id
            });
            res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

module.exports = router;
