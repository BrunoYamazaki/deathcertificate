const { Router } = require('express');

const PatientController = require('./app/controller/PatientController');

const router = Router();

router.get('/patients', PatientController.index);
router.get('/patients/:id', PatientController.show);
router.delete('/patients/:id', PatientController.delete);

module.exports = router;
