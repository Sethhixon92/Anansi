const router = require('express').Router();
const { Timesheet, Employee, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Timesheet.findAll({
      where: {
        // use the ID from the session
        employee_id: req.session.employee_id
      },
      attributes: [
        'id',
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
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// router.get('/edit/:id', (req, res) => {
//   Timesheet.findOne(req.params.id, {
//     attributes: [
//       'id',
//       'project_name',
//       'project_description',
//       'hours_worked',
//       'created_at',
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'employee_id', 'timesheet_id', 'created_at'],
//         include: {
//           model: Employee,
//           attributes: ['email']
//         }
//       },
//       {
//         model: Employee,
//         attributes: ['email']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (dbPostData) {
//         const post = dbPostData.get({ plain: true });
        
//         res.render('edit-timesheet', {
//           post,
//           loggedIn: true
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });


module.exports = router;