const { app } = require('@azure/functions');
const openai = require("../../../lib/fetchSuggestionFromChatGPT");

app.http('getChatGPTSuggestion', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: 'Write a random text prompt for DALL•E to generate an image, this prompt will be shown to the use,
                      include details   '
        })

        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});
