import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // delay ensures DOM is ready
    }
  }, [location]);

  return (
    <>
      <Home />
      <About />
      <Works />
    </>
  )
}

export default App;