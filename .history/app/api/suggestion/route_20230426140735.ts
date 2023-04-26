export async function GET(request: Request) {

    // connect to Microsft Azure Function Endpoint
    const response = await fetch('...', {
        cache: 'no-store'
    })
     
    const textdata = await response.text();


    return new Response(JSON.stringify(textData.trim()))
}