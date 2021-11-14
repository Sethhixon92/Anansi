const router = require('express').Router();


// `/api/timesheets` endpoint


router.get('/', (req,res)=>{
  res.json({message: 'howdy'});
});

module.exports = router;