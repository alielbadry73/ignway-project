const supabase = require('../supabaseClient');

exports.getLessonsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { data, error } = await supabase
      .from('lessons')
      .select('*')
      .eq('course_id', courseId);
    if (error) throw error;
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createLesson = async (req, res) => {
  try {
    const { courseId, title, content, videoUrl, files } = req.body;
    const { data, error } = await supabase
      .from('lessons')
      .insert([{ course_id: courseId, title, content, video_url: videoUrl, files }])
      .select('*');
    if (error) throw error;
    res.status(201).json({ data: data[0] });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
