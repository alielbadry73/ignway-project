const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://cofrgebuynvrfwtyztwz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvZnJnZWJ1eW52cmZ3dHl6dHd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwOTk1ODgsImV4cCI6MjA4NjY3NTU4OH0.dgLTBx9-ewMqj88M8z2kxeNKsP9Ia9vmRfY1KkMg3gc';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
