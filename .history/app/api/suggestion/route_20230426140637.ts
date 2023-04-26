export async function GET(request: Request) {

    // connect to Microsft Azzure Function
    const response = await fetch('...', {
        cache: 'no-store'
    })

    


    return new Response('Helo, Next.js')
}