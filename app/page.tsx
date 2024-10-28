import Banner from "./components/Banner";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import About from "./components/home/About";
import CallAction from "./components/home/CallAction";
import Features from "./components/home/Features";
import Hero from "./components/home/Hero";
import Testimonials from "./components/home/Testimonials";
import Services from "./components/home/Services";

const Home: React.FC = () => {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-br from-teal-950 to-teal-800 relative">
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px), linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25"> */}
        {/* <Navbar/> */}
        <Banner/>
        {/* </div> */}
      </div>

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
