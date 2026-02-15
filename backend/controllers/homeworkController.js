const supabase = require('../supabaseClient');

exports.getHomeworkByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { data, error } = await supabase
      .from('homework')
      .select('*')
      .eq('course_id', courseId);
    if (error) throw error;
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createHomework = async (req, res) => {
  try {
    const { courseId, title, description, deadline } = req.body;
    const { data, error } = await supabase
      .from('homework')
      .insert([{ course_id: courseId, title, description, deadline }])
      .select('*');
    if (error) throw error;
    res.status(201).json({ data: data[0] });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
