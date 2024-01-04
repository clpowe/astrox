import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData()
	const name = data.get('name')
	const amount = data.get('amount')
	console.log(name, amount)
	return new Response(
		JSON.stringify({
			message: 'Success!'
		}),
		{ status: 200 }
	)
}
