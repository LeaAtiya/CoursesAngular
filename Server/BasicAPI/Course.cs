namespace AngularServer
{
    public enum LearningWay
    {
        Frontal,
        Zoom
    }

    public class Course
    {
        private static int NextId = 0;
        public int Id { get; set; }
        public string Name { get; set; }
        public int? CategoryId { get; set; }
        public int? LessonsAmount { get; set; }
        public DateTime? StartDate { get; set; }
        public string[] CourseSyllabus { get; set; }
        public LearningWay? LearningWay { get; set; }
        public int? LecturerId { get; set; }
        public string Image { get; set; }

        public Course()
        {
            Id = NextId++;
        }
    }

}
