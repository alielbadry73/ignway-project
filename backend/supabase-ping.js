const supabase = require('./supabaseClient');

async function testPing() {
  const { data, error } = await supabase.from('users').select('id').limit(1);
  if (error) {
    console.error('Supabase ping failed:', error);
  } else {
    console.log('Supabase ping success:', data);
  }
}

testPing();
