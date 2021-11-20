const router = require('express').Router();
const { Timesheet, Employee, Comment } = require('../../models');
// `/api/timesheets` endpoint



router.get('/', (req, res) => {
  Timesheet.findAll({
    attributes: ['id', 'project_name', 'project_description', 'created_at'],
    order: [['created_at','DESC']],
    include: [
      {
        model: Employee,
        attributes: ['email']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'employee_id', 'timesheet_id', 'created_at'],
        include: {
          model: Employee,
          attributes: ['email']
        }
      }
    ]
  })
    .then(timesheetData => res.json(timesheetData))
    .catch(err => res.status(500).json(err));
});


router.get('/:id', (req, res) => {
  Timesheet.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'project_name', 'project_description', 'created_at'],
    include: [
      {
        model: Employee,
        attributes: ['email']
      }
    ]
  }).then(TimesheetData => res.json(TimesheetData))
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  //   Timesheet
  Timesheet.create({
    project_name: req.body.project_name,
    project_description: req.body.project_description,
    hours_worked: req.body.hours_worked,
    employee_id: req.session.employee_id
  })
    .then((dbTimesheetData) => res.json(dbTimesheetData))
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Timesheet.update(
    {
      project_name: req.body.project_name,
      project_description: req.body.project_description,
      hours_worked: req.body.hours_worked,
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;

