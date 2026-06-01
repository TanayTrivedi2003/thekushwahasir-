import {
  Routes,
  Route
} from "react-router-dom";

import PiSlider from "./components/PiSlider";
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

import AboutPage from "./pages/AboutPage";

import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PiSlider />
      <SocialSection />
      <Reels />
      <Videos />
      <About />
      <Brands />
      <Testimonials />
      <FeaturedNews />
      <FooterCTA />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>
    </>
  );
}