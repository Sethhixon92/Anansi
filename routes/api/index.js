const router = require('express').Router();
const employeesRoutes = require('./employees-routes');
const timeSheetRoutes = require('./timeSheet-routes');
const commentRoutes = require('./comment-routes');

router.use('/employees', employeesRoutes);
router.use('/timesheets', timeSheetRoutes);
router.use('/comments', commentRoutes);

module.exports = router;