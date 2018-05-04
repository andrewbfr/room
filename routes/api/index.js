/* establishing app-wide availability of /api/etc routes*/

const router = require("express").Router();
const molderRoutes = require("./molders");
// const skiRoutes = require("./skis");

//molder routes
router.use("/molder", molderRoutes);


//ski routes
// router.use("/skis", skiRoutes);

module.exports = router;