import About from "./About";
import Award from "./Award";
import ChefWord from "./ChefWord";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Menu from "./Menu";
import Navbar from "./Navbar";
import NewsLetter from "./Newsletter";
import PhotoGallery from "./PhotoGallery";
import Video from "./Video";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <ChefWord />
        <Video />
        <Award />
        <PhotoGallery />
        <Contact />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}

export default App;
