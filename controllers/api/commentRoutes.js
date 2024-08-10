const router = require("express").Router();
const {Comment} = require("../../models");

router.get('/', async (req, res) => {
    try {
        // Example: Fetch all comments
        const comments = await Comment.findAll();
        console.log(comments);
        // res.render('all', { comments });
        res.status(200).json(comments); // Pass comments to the template
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to load comments' });
    }
});

router.post('/', async (req, res) => {
    try {
        const comData = await Comment.create({
            message: req.body.message,
            timestamp: req.body.timestamp,
            user_id: req.session.user_id
        });
        res.status(200).json(comData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;