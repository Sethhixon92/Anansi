const router = require('express').Router();
//const { employees} = require('../../models');

 let example = {
  first_name: 'Chuck',
  last_name: 'Norris'
}

// `/api/employees` endpoint


router.get('/', (req,res)=>{
  //res.json({message: 'hello'});
  res.json(example);
});

module.exports = router;