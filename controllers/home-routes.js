const router = require('express').Router();
const sequelize = require('../config/connection');
const { Timesheet, Employee, Comment } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
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
      res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/timesheet/:id', (req, res) => {
  Timesheet.findOne({
    where: {
      id: req.params.id
    },
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
      console.log(dbPostData);
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data
      const timesheet = dbPostData.get({ plain: true });

      // pass data to template
      res.render('single-post', { timesheet, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
 });


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});



module.exports = router;