const router = require('express').Router();
const { Comment } = require('../../models');

router.get("/", (req,res)=> {
  Comment.findAll({})
  .then(commentData => res.json(commentData))
  .catch(err => res.status(500).json(err));
});

router.get("/:id", (req,res) => {
  Comment.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(commentData => res.json(commentData))
  .catch(err => res.status(500).json(err));
});


router.post("/", (req,res) => {
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      employee_id: req.body.employee_id,
      timesheet_id: req.body.timesheet_id
    })
    .then(commentData => res.json(commentData))
    .catch(err => res.status(500).json(err));
  }
});

module.exports = router;
