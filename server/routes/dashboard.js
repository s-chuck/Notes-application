const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const dashboardController = require('../controllers/dashboardController');

/**
 * Dashboard Routes 
*/

//what happens is when /dashboard is called first isLoggedIn will be called as it is a middleware function and the moment it gets called it will go to the checkAuth file and see if this person is logged in or not if yes then next() is called and the control will shift to the dashboardController.dashboard if not then the function will stop.
router.get('/dashboard', isLoggedIn, dashboardController.dashboard);
router.get('/dashboard/item/:id', isLoggedIn, dashboardController.dashboardViewNote);
router.put('/dashboard/item/:id', isLoggedIn, dashboardController.dashboardUpdateNote);
router.delete('/dashboard/item-delete/:id', isLoggedIn, dashboardController.dashboardDeleteNote);
router.get('/dashboard/add', isLoggedIn, dashboardController.dashboardAddNote);
router.post('/dashboard/add', isLoggedIn, dashboardController.dashboardAddNoteSubmit);
router.get('/dashboard/search', isLoggedIn, dashboardController.dashboardSearch);
router.post('/dashboard/search', isLoggedIn, dashboardController.dashboardSearchSubmit);


module.exports = router;