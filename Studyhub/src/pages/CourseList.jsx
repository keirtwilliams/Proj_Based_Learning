function CourseList({ title, instructor, category, available }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <h3 className="instructor">{instructor}</h3>

      {/* category is already a component, so render it directly */}
      {category}  

      <p className="availability" style={{ color: available ? "green" : "red" }}>
        {available ? "Open ✅" : "Closed ❌"}
      </p>
    </>
  );
}
export default CourseList;