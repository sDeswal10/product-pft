import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zrqjizacdwcsiodtkche.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpycWppemFjZHdjc2lvZHRrY2hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5NjcyNzgsImV4cCI6MjAyNzU0MzI3OH0.0VOy9X8-eRxsZPvtic6i5N0byKCrxPTTZzjpzztTKhI'
export const supabase = createClient(supabaseUrl, supabaseKey);