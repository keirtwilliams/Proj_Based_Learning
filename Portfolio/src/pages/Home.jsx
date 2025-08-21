import TextType from "../components/TextType";
import SocialIcons from "../components/SocialIcons";

function Home() {
  return (
    <div>
 

      <TextType 
      text={[
     "Hey! Welcome ",
     "I'm Keirt William Gemperle",
     "Passionate About Front-End Development "
       ]}
       
        typingSpeed={50}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
      
      <SocialIcons />
       </div>   
  );
}

export default Home;
