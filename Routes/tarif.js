const router = require("express").Router();
const tarif = require("../Controller/tarif");

router.get("/:id",tarif.getFindId);

module.exports = router;
