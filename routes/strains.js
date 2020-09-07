const router = require("express").Router();
const strainController = require("../controllers/strainsController");
const auth = require('../middleware/auth');

router.route("/all").get(strainController.getAll);
router.route("/", auth).post(strainController.create)
router.route("/update/:id", auth).put(strainController.update)
router.route("/:id", auth).delete(strainController.deletebyid);
router.route("/bynameall").get(strainController.bynameall);

module.exports = router;