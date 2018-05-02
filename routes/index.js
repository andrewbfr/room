/* permiting access to every api route to the entire app */

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API Routes

router.use("/api", apiRoutes);