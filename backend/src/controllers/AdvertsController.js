class AdvertsController {
    async getAdverts(request, response) {
        response.status(200).json("Hello world")
    }
}

module.exports = AdvertsController;