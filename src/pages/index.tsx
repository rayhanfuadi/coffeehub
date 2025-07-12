import Navbar from "./components/fragments/Navbar/Navbar";
import About from "./components/layout/About/About";
import Blog from "./components/layout/Blog/Blog";
import Contact from "./components/layout/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import HeroSection from "./components/layout/HeroSection/HeroSection";
import Portfolio from "./components/layout/Portfolio/Portfolio";
import Services from "./components/layout/Services/Services";
import Shop from "./components/layout/Shop/Shop";

export default function Home() {
  return (
    <main className="relative overflow-hidden min-w-full">
      <div className="fixed top-0 left-0 w-full z-50 ">
        <Navbar />
      </div>
      <div className="container min-w-full grid gap-y-[280px]">
        <HeroSection />
        <About />
        <Services />
        <Shop />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
