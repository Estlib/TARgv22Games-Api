const {db} = require('../db')
const Influencer = db.influencers

//get list of influencers
exports.getAll =  async (req, res) => {
    const influencers = await Influencer.findAll({attributes:["onlinename"]})
    res.send(influencers)
}

getBaseUrl = (request) => {
    return (
        (request.connection && request.connection.encrypted ? "https" : "http") +
        `://${request.headers.host}`
    )
}