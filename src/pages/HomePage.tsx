import Hero from "../components/home/Hero";
import Philosophy from "../components/home/Philosophy";
// import Journey from "../components/home/Journery"
// import Amenities from "../components/home/Amenities"
// import Gallery from "../components/home/Gallery"
import Testimonials from "../components/home/Testimonials";
import Quality from "../components/home/Quality";
import Updates from "../components/home/Updates";
import Developments from "../components/home/DevelopmentUpdates";
import About from "../components/about/About";
import ImageCarousel from "../components/home/ImageCarousel";
import VideoSection from "../components/home/VideoSection";
import ImagesAndContent from "../components/home/ImagesAndContent";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <ImageCarousel />
      <Developments />
      <VideoSection />
      <Philosophy />
      <ImagesAndContent />
      <Quality />
      <Updates />
      <Testimonials />
    </div>
  );
};

export default HomePage;
