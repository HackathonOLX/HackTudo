const { Router } = require("express");
const AdvertsController = require("../controllers/AdvertsController");

const upload = require("../configs/multer")

const controller = new AdvertsController();

const routes = Router();

routes.post("/", upload.single("imagem"), controller.registerAdverts);


module.exports = routes;