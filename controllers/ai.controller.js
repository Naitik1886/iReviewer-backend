const {generateContent} = require('../services/ai.service.js');

async function generateResponse(req,res) {
  const {code} = req.body;

    if(!code) {
        return res.status(400).json({ error: 'No code provided' });

    }

    const response = await generateContent(code);
    return res.status(200).send({ response });

}
module.exports = {generateResponse};