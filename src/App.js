import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from "./Components/NavBar";
import AnimatedRoutes from './Components/AnimatedRoutes';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <AnimatedRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
