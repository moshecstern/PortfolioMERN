const router = require("express").Router();
const experienceController = require("../controllers/ExperienceController");
// const jwt = require("jsonwebtoken");
// const jwtVerify = require("../../config/jwt");
const auth = require('../middleware/auth');

router.route("/all").get(experienceController.getAll);
router.route("/", auth).post(experienceController.create)
router.route("/update/:id", auth).put(experienceController.update)
router.route("/catagory/:catagory").get(experienceController.getbycatagory);
router.route("/catagory/:catagory").put(experienceController.editbycatagory);
router.route("/catagory/:catagory").post(experienceController.createbycatagory);
router.route("/:id", auth).delete(experienceController.deletebyid);


module.exports = router;