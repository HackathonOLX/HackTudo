const { Router } = require("express");
const advertsRoutes = require("./adverts.routes")

const routes = Router();

routes.use("/adverts", advertsRoutes);

module.exports = routes;

