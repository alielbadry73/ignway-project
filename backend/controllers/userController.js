const supabase = require('../supabaseClient');

exports.getAllUsers = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('id, name, email, role, created_at, updated_at');
    if (error) throw error;
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id);
    if (error) throw error;
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
