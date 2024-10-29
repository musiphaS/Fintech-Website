import Banner from "./components/Banner";
import Footer from "./components/Footer";
import About from "./components/home/About";
import CallAction from "./components/home/CallAction";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import Testimonials from "./components/home/Testimonials";
import Services from "./components/home/Services";

const Home = () => {
  return (
    <main>       
        <Banner/>
      <About/>
      <Features/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <CallAction/>
      <Footer/>
     
    </main>
  );
}

export default Home;
