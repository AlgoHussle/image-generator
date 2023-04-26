export async function GET(request: Request) {

    // connect to Microsft Azure Function Endpoint
    const response = await fetch('...', {
        cache: 'no-store'
    })
     
    const textData = await response.text();


    return new Response(JSON.stringify(textData.trim()), {
        this.state.first
    })
}