function CategoryTag({ category }) {
  if (!category) return null;

  const colors = {
    "Web Development": "#007bff",
    "Data Science": "#28a745",
    "Design": "#e83e8c",
    "Cloud": "#17a2b8",
    "Security": "#fd7e14"
  };

  return (
    <span
      className="tag"
      style={{ backgroundColor: colors[category] || "#6c757d" }}
    >
      {category}
    </span>
  );
}
export default CategoryTag;
