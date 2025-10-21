const stacks = [
  { name: "React", icon: "/images/react.svg" },
  { name: "JavaScript", icon: "/images/javascript.svg" },
  { name: "HTML", icon: "/images/html.svg" },
  { name: "CSS", icon: "/images/css.svg" },
  { name: "Vite", icon: "/images/vite.svg" },
  { name: "Git", icon: "/images/git.svg" },
  { name: "VS Code", icon: "/images/vscode.svg" },
  { name: "Github", icon: "/images/github.svg" },
];


function TechStack() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="min-h-screen py-20">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-gray-900 dark:text-white">
          Tech Stack & Tools
        </h2>

        {/* Divider under heading */}
        <div className="flex justify-center mb-14">
          <div className="w-24 h-1 bg-indigo-500 rounded-full"></div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
          {stacks.map((stack) => (
            <div
              key={stack.name}
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 shadow-sm rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <img
                src={stack.icon}
                alt={stack.name}
                className="w-14 h-14 mb-3"
              />
              <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                {stack.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
