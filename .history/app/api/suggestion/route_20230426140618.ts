export async function GET(request: Request) {

    // const { text } = await request.json()
    const response = await fetch('...', {
        cache: 'no-store'
    })

    


    return new Response('Helo, Next.js')
}