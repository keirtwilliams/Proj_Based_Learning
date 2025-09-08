function CourseList({ title, instructor, category, available }) {
  return (
    <div className="course-card">
      <h1 className="title">{title}</h1>
      <h3 className="instructor">By {instructor}</h3>

      {category}

      <p className={`availability ${available ? "open" : "closed"}`}>
        {available ? "Open ✅" : "Closed ❌"}
      </p>

      {available && <button className="enroll-btn">Enroll Now</button>}
    </div>
  );
}
export default CourseList;
