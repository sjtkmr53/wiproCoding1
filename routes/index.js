const router = require("express").Router();
//Controllers
const commonController = require("../controller/commonController");
router.post("/ref-data", commonController.getRefData)
module.exports = router;
