const router = require('express').Router();
const sequelize = require('../config/connection');
const { Timesheet, Employee, Comment } = require('../models');

router.get('/', (req, res) => {
  Timesheet.findAll({
    attributes: [
      'id',
      'employee_id',
      'project_name',
      'project_description',
      'hours_worked',
      'created_at'
      
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'employee_id', 'timesheet_id', 'created_at'],
        include: {
          model: Employee,
          attributes: ['email']
        }
      },
      {
        model: Employee,
        attributes: ['email']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      // pass a single post object into the homepage template
      res.render('homepage', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;