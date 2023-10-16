const { Router } = require("express");
const AdvertsController = require("../controllers/AdvertsController");

const upload = require("../configs/multer")

const controller = new AdvertsController();

const routes = Router();

routes.get("/", controller.getAdverts);
routes.post("/", upload.single("imagem"), controller.registerAdverts);
routes.put("/:id", upload.single("imagem"), controller.editAdverts);
routes.delete("/:id", controller.deleteAdverts);


module.exports = routes;