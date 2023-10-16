const { Router } = require("express");
const AdvertsController = require("../controllers/AdvertsController");

const controller = new AdvertsController();

const routes = Router();

routes.get("/", controller.getAdverts);


module.exports =  routes;