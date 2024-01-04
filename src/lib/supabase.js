import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
	'https://tpyvedonmrogezpwszko.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRweXZlZG9ubXJvZ2V6cHdzemtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyODY0ODcsImV4cCI6MTk5OTg2MjQ4N30.vyyOWaYrtgDvqTJA1q-xqUxAZ1qLM9XBxy7XwnrgYtk'
)
