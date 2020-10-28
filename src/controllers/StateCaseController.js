const StateCase = require('../models/statecases');
const State = require('../models/states');
const { Op, and } = require("sequelize");
const api = require('../services/api');

module.exports = {

    async store(req, res) {

        const { uf, state, cases, deaths, suspects, refuses, recovered, datetime } = req.body;


        const StateIdFind = await State.findOne({ where: { uf: uf } })

        if (StateIdFind == null) {
            return res.status(400).json({ message: `State ${uf} not exist!` })
        }

        const StateCaseCreate = await StateCase.create({ stateId: StateIdFind.id, cases, deaths, suspects, refuses, recovered, datetime })

            .catch(respose => {

                return res.status(200).json({ message: `State ${uf} not exist!` })
            })

        return res.json(StateCaseCreate);


    },


    async index(req, res) {

        const StateCases = await StateCase.findAll()

        return res.json(StateCases);
    },

    async updateState(req, res) {
        const { uf } = req.body;
        const data = await api.get(`/api/report/v1/brazil/uf/${uf}`)

            .catch(error => {
                return res.status(500).json({ message: 'State invalid' })
            })

            console.log(data.data)

        const StateIdFind = await State.findOne({ where: { uf: uf } })

        if (StateIdFind == null) {
            return res.status(200).json({ message: `State ${uf} not exist!` })
        }

        const StateCaseCount = await StateCase.count({
            where: {
                [Op.and]: [{ datetime: data.data.datetime }, { uid: data.data.uid }],
            }
        })

        if (StateCaseCount > 0) {
            return res.status(500).json({ message: 'Record already updated!' })
        }
        

        // preciso desestruturar o json da api para gravar junto com o id do estado no banco
         await StateCase.create({
            
             stateId: StateIdFind.id,
             uid: data.data.uid,
             cases: data.data.cases,
             deaths: data.data.deaths,
             suspects: data.data.suspects,
             refuses: data.data.refuses,
             recovered: 0,
             datetime: data.data.datetime
        })

            .catch(respose => {

                return res.status(500);
            })

        return res.status(200).json({ message: `State updated success!` })


    },


}
