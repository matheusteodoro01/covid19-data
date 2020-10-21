const StateCase = require('../models/statecases');
const { Op, and } = require("sequelize");
const api = require('../services/api');
module.exports = {

    async store(req, res) {

        const { cases, deaths, suspects, refuses, recovered,  datetime } = req.body;

        const StateCaseCreate = await StateCase.create({ cases, deaths, suspects, refuses, recovered, datetime }).catch(respose => {

        })

        return res.json(StateCaseCreate);
    },


    async index(req, res) {

        const StateCases = await StateCase.findAll();

        return res.json(StateCases);
    },

    async storeSP(req, res) {
        const { uf } = req.body;
        const data = await api.get(`/api/report/v1/brazil/uf/${uf}`)

            .catch(error => {
                return res.status(500).json({ message: 'State invalid' })
            })


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

        const StateCaseCreate = await StateCase.create(data.data)

            .catch(respose => {

                return res.status(500);
            })

        return res.status(200).json({ message: `State ${StateCaseCreate.state} updated success!` })


    },


}
