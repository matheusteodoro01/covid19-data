const SPcaso = require('../models/spcasos')

module.exports = {
    async store(req, res) {
        const { date, week, cases } = req.body;

        const CasoSP = await SPcaso.create({date,week,cases})

        return res.json(CasoSP);
    }
}