const router = require('express').Router();
const employeesRoutes = require('./employees-routes');
const timeSheetRoutes = require('./timeSheet-routes');


router.use('/employees', employeesRoutes);
router.use('/timesheets', timeSheetRoutes);

module.exports = router;