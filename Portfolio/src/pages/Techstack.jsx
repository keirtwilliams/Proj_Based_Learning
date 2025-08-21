import reactLogo from "../assets/images/react.svg";
import jsLogo from "../assets/images/javascript.svg";
import htmlLogo from "../assets/images/html.svg";
import cssLogo from "../assets/images/css.svg";
import viteLogo from "../assets/images/vite.svg";
import gitLogo from "../assets/images/git.svg";
import vscodeLogo from "../assets/images/vscode.svg";
import githubLogo from "../assets/images/github.svg";

const stacks = [
  { name: "React", icon: reactLogo },
  { name: "JavaScript", icon: jsLogo },
  { name: "HTML", icon: htmlLogo },
  { name: "CSS", icon: cssLogo },
  { name: "Vite", icon: viteLogo },
  { name: "Git", icon: gitLogo },
  { name: "VS Code", icon: vscodeLogo },
  { name: "Github", icon: githubLogo}
];

function TechStack() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
         Tech Stack & Tools
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
        {stacks.map((stack) => (
          <div
            key={stack.name}
            className="flex flex-col items-center text-center bg-white shadow-md rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={stack.icon}
              alt={stack.name}
              className="w-16 h-16 mb-4"
            />
            <p className="text-base font-semibold">{stack.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
