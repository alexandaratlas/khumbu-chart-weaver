
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kcqcpmibmelwfabnocet.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjcWNwbWlibWVsd2ZhYm5vY2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzOTc2MDYsImV4cCI6MjA2NDk3MzYwNn0.kh-4Dw0sgXUVBN6hYTV7BB67rIt_7BTn6bMxcu2vAic'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
