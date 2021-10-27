const process = require("node:process");
const path = require("node:path");
const fs = require("node:fs/promises");
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res) {

  const input = await fs.readFile(path.join(process.cwd(), "data", "properties.json"), { encoding: "utf-8" });
  const data = JSON.parse(input);

  res.json({ data, total_records: data.length });
});

module.exports = router;
