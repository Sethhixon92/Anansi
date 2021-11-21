const router = require('express').Router();
const employeeRoutes = require('./employees-routes');
const timesheetRoutes = require('./timeSheet-routes');
const commentRoutes = require('./comment-routes');

router.use('/employees', employeeRoutes);
router.use('/timesheets', timesheetRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

