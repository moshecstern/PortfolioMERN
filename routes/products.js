const router = require("express").Router();
const productsController = require("../controllers/productsController");
const auth = require('../middleware/auth');

router.route("/all").get(productsController.getAll);
router.route("/", auth).post(productsController.create)
router.route("/update/:id", auth).put(productsController.update)
router.route("/:id", auth).delete(productsController.deletebyid);
router.route("/bynameall").get(productsController.bynameall);

module.exports = router;