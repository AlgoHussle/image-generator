export async function GET(request: Request) {

    const response = await fetch('...', {
        cache
    })
    return new Response('Helo, Next.js')
}