const express = require('express');
const router = express.Router();
const { createVehicle, getAllVehicles, getVehicleById, updateVehicle, deleteVehicle } = require('../controllers/vehicleController');
const adminMiddleware = require('./../middleware/adminMiddleware');

router.post('/',adminMiddleware,createVehicle);
  
router.get('/', adminMiddleware,getAllVehicles);
  
// router.get('/:id', getVehicleById);
  
router.put('/:id', adminMiddleware,updateVehicle);
  
router.delete('/:id',adminMiddleware , deleteVehicle);
  

module.exports = router;
