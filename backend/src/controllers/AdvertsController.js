const knex = require("../database/");

class AdvertsController {
    async getAdverts(request, response) {
        response.status(200).json("Hello world")
    };

    async registerAdverts(request, response){

        const {
            name,
            information,
            price,
        } = request.body;

        const imagem = request.file.filename;

        await knex("adverts").insert({
            name,
            information,
            price,
            imagem,
        })

        response.status(200).json({
            message: "Anúncio cadastrado"
        });
    }
}

module.exports = AdvertsController;