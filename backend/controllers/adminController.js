const MusicasModels = require('../models/musicaModel')

class adminController {

    static async listarMusicas(req, res) {
        const musicas = await MusicasModels.findAll()
        res.json(musicas)
    }



    static async cadastrarMusica(req, res) {
        try {
            const { nome, cantor, link, capa } = req.body

            const novaMusica = await MusicasModels.create({ nome, cantor, link, capa })
            res.json({ message: 'Música cadastrada com sucesso', dados: novaMusica })


        } catch (err) {
            res.json({ message: "A Música não foi cadastrada" })
        }
    }

    static async alterarMusica(req, res) {
        try {
            const id = req.params.id
            const novaMusica = req.body
            const musicaSelecionada = await MusicasModels.findByPk(id) // encontra a pk ( primarykey)
            const musicaAlterada = await musicaSelecionada.update(novaMusica)

            res.json({ message: 'Música alterada com sucesso', dados: musicaAlterada })


        } catch (err) {
            res.json({ message: "A Música não foi alterada" })
        }
    }

    static async deletarMusica(req, res) {
        try {
            const id = req.params.id
            const musicaSelecionada = await MusicasModels.findByPk(id) // encontra a pk ( primarykey)
            await musicaSelecionada.destroy()

            res.json({ message: 'Música deletada com sucesso' })


        } catch (err) {
            res.json({ message: "A Música não foi deletada" })
        }
    }
}

module.exports = adminController
