import { useEffect, useRef } from "react";
import { useLocation, useNavigationType  } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import OtherWorks from "./components/OtherWorks";

function App() {
  const location = useLocation();
  const navigationType = useNavigationType(); 
  const scrolledRef = useRef(false);

  useEffect(() => {
    if (
      !scrolledRef.current &&
      navigationType === "PUSH" &&
      location.state?.scrollTo
    ) {
      scrolledRef.current = true;

      const id = location.state.scrollTo;
      const section = document.getElementById(id);

      setTimeout(() => {
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location, navigationType]);

  return (
    <>
      <Home />
      <About />
      <Works />
      <OtherWorks />
    </>
  )
}

export default App;