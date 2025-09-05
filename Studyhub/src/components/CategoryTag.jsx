function CategoryTag( {category}){
    {/*a guard clause is a quick early return that stops a function if certain conditions aren’t met. */}
  if(!category) return null;
    return <p className="tag">{category}</p>
};
export default CategoryTag;