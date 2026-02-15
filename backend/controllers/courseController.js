const supabase = require('../supabaseClient');

exports.getAllCourses = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*, users(name, email)');
    if (error) throw error;
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const { title, description } = req.body;
    const teacherId = req.user.id;
    const { data, error } = await supabase
      .from('courses')
      .insert([{ title, description, teacher_id: teacherId }])
      .select('*');
    if (error) throw error;
    res.status(201).json({ data: data[0] });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('courses')
      .delete()
      .eq('id', id);
    if (error) throw error;
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
