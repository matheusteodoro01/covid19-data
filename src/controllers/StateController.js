const State = require("../models/states")

module.exports = {

    async store(req, res) {

        const { uf, state } = req.body;

        State.create({ uf, state });


    },

    async index(req, res) {

        const States = await State.findAll();

        return res.json(States);
    },



}