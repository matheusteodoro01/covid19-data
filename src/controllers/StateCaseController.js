const StateCase = require('../models/statecases');
const State = require('../models/states');
const { Op, and } = require("sequelize");
const api = require('../services/api');

module.exports = {

    async store(req, res) {

        const { uf, cases, deaths, suspects, refuses, recovered, datetime } = req.body;

        const StateIdFind = await State.findOne({ where: { uf: uf } })

        if (StateIdFind == null) {
            return res.status(200).json({ message: `State ${uf} not exist!` })
        }

        const StateCaseCreate = await StateCase.create({ stateId: StateIdFind.id, cases, deaths, suspects, refuses, recovered, datetime })

            .catch(respose => {

                return res.status(200).json({ message: `State ${uf} not exist!` })
            })

        return res.json(StateCaseCreate);


    },


    async index(req, res) {

        const StateCases = await StateCase.findAll()

            .catch(respose => {

                return res.status(500);
            })

        return res.json(StateCases);
    },

    async updateState(req, res) {
        const { uf } = req.body;
        const data = await api.get(`/api/report/v1/brazil/uf/${uf}`)

            .catch(error => {
                return res.status(500).json({ message: 'State invalid' })
            })

            const StateIdFind = await State.findOne({ where: { uf: uf } })

            if (StateIdFind == null) {
                return res.status(200).json({ message: `State ${uf} not exist!` })
            }

        const StateCaseFind = await StateCase.count({
            where: {
                [Op.and]: [{ datetime: data.data.datetime }, { uid: data.data.uid }],
            }
        })

            .catch(respose => {

                return res.status(500);
            })

            
        

        if (StateCaseFind > 0) {
            return res.status(500).json({ message: 'Record already updated!' })
        }

        // preciso desestruturar o json da api para gravar junto com o id do estado no banco
        const StateCaseCreate = await StateCase.create(data.data)

            .catch(respose => {

                return res.status(500);
            })

        return res.status(200).json({ message: `State ${StateCaseCreate.state} updated success!` })


    },


}
