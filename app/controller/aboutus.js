const {Op} = require("sequelize")
const model = require("../model")

module.exports = {
    show(req, res) {

        return model
            .AboutUs
            .findAll()
            .then((data) => res.status(200).send(data))
            .catch((error) => res.status(400).send(error))
        },
    getById(req, res) {
        return model
            .AboutUs
            .findByPk(req.params.id)
            .then((data) => {
                if (!data) {
                    res
                        .status(200)
                        .send({message: 'wrong id'})
                }
                res
                    .status(200)
                    .send(data)

            })
            .catch((error) => res.status(400).send(error))
        },
    create(req, res) {
        const title = req.body.title
        const description = req.body.description
        const image = req.file.originalname

        const atribute = {
            title: title,
            description: description,
            image: image,
            createdAt: new Date()
        }

        console.log(atribute)


        return model.AboutUs
            .findOne({
                where: {
                    title: title
                }
            })
            .then((data) => {
                if (data) {
                    res
                        .status(400)
                        .send({message: 'Title AboutUs already taken'})
                } else {
                    model
                        .AboutUs
                        .create(atribute)
                        .then((data) => res.status(200).send(data))
                        .catch((error) => res.status(400).send("error bang"));
                }
            })
            .catch((error) => res.status(400).send(error));
    },
    update(req, res){
        const id = req.params.id

        const title = req.body.title
        const description = req.body.description
        const image = req.file.originalname

        const atribute = {
            title: title,
            description: description,
            image: image,
            createdAt: new Date()
        }

        return model.AboutUs
            .update(atribute, {
                where: {
                    id: id
                }
            })
            .then((data) => {
                if (data == 1 ){
                    res.status(200).send({ message: 'data telah diperbarui'})
                }else{
                    res.status(400).send({ message: `${id} salah`})
                }
            })
            .catch((error) => res.status(400).send(error))
    },
    delete(req, res){
        const id = req.params.id

        return model.AboutUs
            .destroy({
                where: {
                    id: id
                }
            })
            .then((data) =>{
                if (data == 1 ){
                    res.status(200).send({message: 'dah ilang'})
                }else{
                    res.status(400).send({message: 'gagal'})
                }
            })
            .catch((error) => res.status(400).send(error))
    }
}