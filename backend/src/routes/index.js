const { Router } = require("express");
const advertsRoutes = require("./adverts.routes")

const routes = Router();

routes.use("/adverts", advertsRoutes);
routes.get("/", (request, response) => {
    response.status(200).json("hello world")
})

module.exports = routes;

