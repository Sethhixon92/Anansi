

const router = require('express').Router();
const { Employee, Timesheet, Comment } = require('../../models');

// `/api/employees` endpoint


router.get('/', (req, res) => {
  Employee.findAll()
    .then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

router.get('/:id', (req, res) => {

  Employee.findOne({
    where: {
      id: req.params.id
    },
    attributes: { exclude: ['password'] },
    include: [
      {
        model: Timesheet,
        attributes: ['id', 'project_name', 'project_description', 'created_at']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'created_at'],
        include: {
          model: Timesheet,
          attributes: ['project_name']
        }
      },
      {
        model: Timesheet,
        attributes: ['project_name']
      }
    ]
  })
    .then(dbEmployeeData => res.json(dbEmployeeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
  Employee.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  }).then(dbEmployeedata => {
    res.json(dbEmployeedata);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/login',(req,res) => {
  Employee.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbEmployeeData =>{
    if(!dbEmployeeData){
      res.status(400).json({message: 'no user with this email address'});
      return;
    }
    const validPassword = dbEmployeeData.checkPassword(req.body.password);
    if(!validPassword){
      res.status(400).json({message: 'incorrect password'});
    }
    res.json({ employee: dbEmployeeData, message: 'You are now logged in!' });
  })
})

module.exports = router;