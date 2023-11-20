const express = require('express');
const router = express.Router();
const { createDriver, getAllDrivers, getDriverById, updateDriver, deleteDriver } = require('../controllers/driverController');
const adminMiddleware = require('./../middleware/adminMiddleware');

router.post('/',adminMiddleware,createDriver);
  
router.get('/', adminMiddleware,getAllDrivers);
  
// router.get('/:id', getDriverById);
  
router.put('/:id', adminMiddleware,updateDriver);
  
router.delete('/:id',adminMiddleware , deleteDriver);
  

module.exports = router;
