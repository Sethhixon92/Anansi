const router = require('express').Router();
const { Employee, Timesheet, Comment } = require('../../models');

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
  })
  .then(dbEmployeeData => {
    req.session.save(() => {
      req.session.employee_id = dbEmployeeData.id;
      req.session.email = dbEmployeeData.email;
      req.session.loggedIn = true;

      res.json(dbEmployeeData);
    });

    
  })
  .catch(err => {
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
      return;
    }

    req.session.save(() => {
      req.session.employee_id = dbEmployeeData.id;
      req.session.email = dbEmployeeData.email;
      req.session.loggedIn = true;

      res.json({ employee: dbEmployeeData, message: 'You are now logged in!' });
    });
  });
});

router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  Employee.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }

});



router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }

});

module.exports = router;

