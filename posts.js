const express = require("express");
const router = express.Router();

router.get("/:id/comments", (req, rsp, next) => {
	rsp.json(req.params.id);
	next();
});

module.exports = router;

