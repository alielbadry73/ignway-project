const supabase = require('../supabaseClient');

exports.getSubmissionsByHomework = async (req, res) => {
  try {
    const { homeworkId } = req.params;
    const { data, error } = await supabase
      .from('submissions')
      .select('*')
      .eq('homework_id', homeworkId);
    if (error) throw error;
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSubmission = async (req, res) => {
  try {
    const { homeworkId, studentId, file, text } = req.body;
    const { data, error } = await supabase
      .from('submissions')
      .insert([{ homework_id: homeworkId, student_id: studentId, file, text }])
      .select('*');
    if (error) throw error;
    res.status(201).json({ data: data[0] });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
