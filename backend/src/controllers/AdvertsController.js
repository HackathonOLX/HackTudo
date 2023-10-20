const knex = require("../database/");
const uploadToDrive = require("../configs/uploadToDrive");

class AdvertsController {
    async getAdverts(request, response) {
        const adverts = await knex("adverts");

        response.status(200).json(adverts);
    };

    async getImage(request, response) {

        const id = request.params.id;

        const advert = await knex("adverts").where({ id }).first();

        const imagem = advert.imagem;

        const imagemBase64 = Buffer.from(imagem).toString('base64');
        console.log(imagemBase64)

        response.contentType('image/png');
        response.send(imagemBase64);


    }

    async registerAdverts(request, response) {

        const {
            name,
            information,
            price,
        } = request.body;

        const imagem = request.file.originalname;
        const uploadedFile = request.file;

        const fileBuffer = uploadedFile.buffer;
        const fileName = uploadedFile.originalname;

        const ID_IMAGEM_GOOGLE_DRIVE = await uploadToDrive(fileBuffer, fileName);
        
        await knex("adverts").insert({
            name,
            information,
            price,
            imagem,
            id_google_drive_image: ID_IMAGEM_GOOGLE_DRIVE,
        }) 

        response.status(200).json({
            message: "Anúncio cadastrado"
        });
    }

    async editAdverts(request, response) {
        const { id } = request.params;

        let { name, information, price } = request.body;

        console.log(id, name, information, price)

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
        }).where({ id })

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