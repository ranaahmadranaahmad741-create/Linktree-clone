



export async function POST() {
    const body = await request.json()

     
  return Response.json({ message: 'Hello World' })
}