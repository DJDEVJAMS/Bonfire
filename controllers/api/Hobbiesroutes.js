const router = require("express").Router();
const {Post, Hobby,Event, User} = require("../../models");


router.get("/:id", async (req,res)=>{
    const hobbyData = await Hobby.findByPk(req.params.id, {
        include: [
            {
                model: Post,
                attributes: [
                    'id',
                    'title', 
                    'user_id',                   
                ]
            },
            {
                model: Event,
                attributes: [
                    'id',
                    'title',
                    'location',
                    'event_time',

                ]
            },
            {
                model: User,
                attributes: [
                    'id',
                    'username',
                ]
            },
        ]
    });
    const blog = hobbyData.get({plain: true});
    console.log(blog);
    res.render('hobby',blog);
    });
module.exports = router;