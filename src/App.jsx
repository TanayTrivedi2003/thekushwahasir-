import PiSlider from "./components/PiSlider";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialSection from "./components/SocialSection";
import Videos from "./components/Videos";
import Reels from "./components/Reels";
import About from "./components/About";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import FooterCTA from "./components/FooterCTA";
import FeaturedNews from "./components/FeaturedNews";




function App() {
  return (
    <>

    
      <Loader />

  
      <Navbar />

      {/* WORK */}
      <Hero />
      <PiSlider />
      <SocialSection />

       


      {/* MEDIA */}

      <Reels />
      <Videos />
      

      {/* ABOUT */}
      <About />

      {/* BRANDS */}
      <Brands />

      {/* TESTIMONIALS */}
      <Testimonials />

      <FeaturedNews />

      {/* WORK TOGETHER */}
      <FooterCTA />

     
    </>
  );
}

export default App;