import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scence/Navbar";
import DotGroup from "./scence/DotGroup";
import Landing from "./scence/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scence/MySkills";
import Projects from "./scence/Projects";
import References from "./scence/References";
import Contact from "./scence/Contact";
import Footer from "./scence/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        SelectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
        <LineGradient />
      </div>
      <div className="w-5/6 mx-auto pt-10 ">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto pt-10 md:h-full">
        <References />
        <LineGradient />
      </div>
      <div className="w-5/6 mx-auto pt-10 md:h-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
