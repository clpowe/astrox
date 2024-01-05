import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData()
	const name = data.get('name')
	const amount = data.get('amount')
	console.log(name, amount)
	const res = `<div class="toast" _="on closeModal add .closing then wait for animationend then remove me">
  <div class="alert alert-info">
    <span>You created a budget named ${name}</span>
  </div>
	<button _="on click trigger closeModal">Close</button>
</div>`
	return new Response(res, {
		status: 200,
		headers: {
			'Content-Type': 'text/html'
		}
	})
}
