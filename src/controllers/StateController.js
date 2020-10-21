const States = require("../models/states")

module.exports = {

    async store(req, res) {

        const { uf, state } = req.body;

        States.create({ uf, state });

        

    }



}