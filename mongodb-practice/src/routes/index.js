const { Router } = require("express");

const { getAll, getOne } = require("../controllers");

const router = Router();

router.get("/", getAll);

router.get("/:pokemon", getOne);

module.exports = router;
