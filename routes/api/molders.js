const router = require('express').Router();
const molderController = require("../../controllers/molderController");

/* so this will align itself with /api/'molders' */

router.route("/")
    .get(molderController.findAll)
    .post(molderController.create);

/* matches with /api/molders/:id */

router.route("/:id")
    .get(molderController.findByNom)
    .put(molderController.updateMolder)
    .delete(molderController.deleteMolder);

module.exports = router;

