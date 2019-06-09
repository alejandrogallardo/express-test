const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()

ROUTER.get('/', (req, res) => {
    res.json({
        firsApi: "Works!"
    })
})

module.exports = ROUTER