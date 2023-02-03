import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode={"wait"}>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </AnimatePresence>
    )
}

export default AnimatedRoutes;