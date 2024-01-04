export const prerender = false
import { supabase } from '../lib/supabase'

export async function GET({ params, request }) {
	const { data, error } = await supabase
		.from('budgets')
		.select()
		.eq('user_id', 'b14877a6-ad64-4fdf-abc2-54ff13a2d0a2')

	if (error) {
		console.error(error)
	}

	return new Response(
		JSON.stringify({
			items: ['Dog', 'Cat', 'Platypus'],
			budgets: data
		})
	)
}
