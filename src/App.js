import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import NavBar from "./Components/NavBar";
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/projects" exact element={<Projects />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
