function ProjectCard({ img, title, text, btn, techstack, link }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-gray-900">
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{text}</p>

      {/* Tech stack */}
      <ul className="flex flex-wrap gap-2 mb-4">
        {techstack.map((tech, index) => (
          <li
            key={index}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm"
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* Button as a link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {btn}
      </a>
    </div>
  );
}

export default ProjectCard;
