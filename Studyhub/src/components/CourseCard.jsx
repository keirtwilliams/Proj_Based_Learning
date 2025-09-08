import CourseList from "../pages/CourseList";
import CategoryTag from "../components/CategoryTag";

function CourseCard() {
  const courses = [
    { id: 1, title: "React for Beginners", instructor: "John Doe", category: "Web Development", available: true },
    { id: 2, title: "Python Data Science", instructor: "Jane Smith", category: "Data Science", available: true },
    { id: 3, title: "UI/UX Design Basics", instructor: "Emily Johnson", category: "Design", available: false },
    { id: 4, title: "Cloud Computing 101", instructor: "Michael Brown", category: "Cloud", available: true },
    { id: 5, title: "Cybersecurity Essentials", instructor: "Sarah Lee", category: "Security", available: false }
  ];

  return (
    <div className="container">
      {courses.map((course) => (
        <div className="card" key={course.id}>
          <CourseList
            title={course.title}
            instructor={course.instructor}
            category={<CategoryTag category={course.category} />}
            available={course.available}
          />
        </div>
      ))}
    </div>
  );
}
export default CourseCard;
