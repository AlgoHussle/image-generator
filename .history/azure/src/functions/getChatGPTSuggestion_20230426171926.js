const { app } = require('@azure/functions');

app.http('getChatGPTSuggestion', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`HELLO"${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});
