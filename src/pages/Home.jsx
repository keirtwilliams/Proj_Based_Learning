import TextType from "../components/TextType";
import SocialIcons from "../components/SocialIcons";

function Home() {
  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-gray-900 px-6 transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            <TextType
              text={[
                "Hey! Welcome 👋",
                "I'm Keirt William Gemperle",
                "Passionate About Front-End Development",
              ]}
              typingSpeed={50}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            📍 Iloilo City, Philippines
          </p>

          <div className="flex md:justify-start justify-center gap-4">
            <SocialIcons />
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/images/keirtwilliam.JPG"
            alt="Keirt William Gemperle"
            className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-xl border-4 border-gray-300 dark:border-gray-700"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
