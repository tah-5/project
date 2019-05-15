const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json("User Page");
});

module.exports = router;
