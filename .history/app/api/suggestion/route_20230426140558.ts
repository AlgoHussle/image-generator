export async function GET(request: Request) {

    const response = await fetch('...', {
        cache: 'no-store'
    })

    
    return new Response('Helo, Next.js')
}