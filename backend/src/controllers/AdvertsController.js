const knex = require("../database/");

class AdvertsController {
    async getAdverts(request, response) {
        const adverts = await knex("adverts");

        response.status(200).json(adverts);
    };

    async registerAdverts(request, response) {

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

    async editAdverts(request, response) {
        const { id } = request.params;

        let { name, information, price } = request.body;

        console.log(id,name,information,price)

        let imagem = request.file.filename;

        const advert = await knex("adverts").where({ id }).first();

        name = name ? name : advert.name;
        information = information ? information : advert.information;
        price = price ? price : advert.price;
        imagem = imagem ? imagem : advert.imagem;

        await knex("adverts").update({
            name,
            information,
            price,
            imagem
        }).where({id})

        response.status(200).json({
            message: "Anúncio atualizado"
        });
    }

    async deleteAdverts(request, response) {
        const { id } = request.params;

        await knex("adverts").where({ id }).del();

        response.status(200).json({
            message: "Anúncio excluido"
        });

    }
}

module.exports = AdvertsController;