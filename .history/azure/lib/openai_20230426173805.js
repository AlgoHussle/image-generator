const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
    organization: process.env.OPEN_AI_ORGAN
})