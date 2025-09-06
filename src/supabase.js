import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tkaaxvpxxwpavzyijwpw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrYWF4dnB4eHdwYXZ6eWlqd3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNTM0MzksImV4cCI6MjA2OTkyOTQzOX0.h0-LvhJU0_y6tvG2B6RtLh76-hJ6cECgZO4su5rJFDY"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;