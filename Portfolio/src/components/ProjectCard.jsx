function ProjectCard({ img, title, text, btn, techstack }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 w-80 hover:shadow-xl transition duration-300">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{text}</p>

      {/* Tech Stack */}
      {techstack && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">
            
          </h3>
          <ul className="flex flex-wrap gap-2">
            {techstack.map((tech, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Button */}
      <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        {btn}
      </button>
    </div>
  );
}

export default ProjectCard;
