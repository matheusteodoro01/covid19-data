
const { update } = require("../models/states");
const State = require("../models/states")

module.exports = {

    async store(req, res) {

        const { uf, state } = req.body;
        if (uf == undefined) {
            return res.status(400).json({ message: 'uf invalided' })
        }
        else if (state == undefined) {
            return res.status(400).json({ message: 'state invalid' })
        }

        const StateFind = await State.count({
            where: { uf: uf }
        })
        if (StateFind > 0) { return res.status(400).json({ message: 'Record already updated!' }) }

        const StateCreted = await State.create({ uf, state })
        res.json(StateCreted)


    },


    async modify() {

        const { id } = req.params;
        const { uf, state } = req.body;

        State.update({

            where: { id: id },
            uf: uf, state: state
        },
        )
    },

    async index(req, res) {

        const States = await State.findAll();

        return res.json(States);
    },



}