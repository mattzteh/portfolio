import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from "./Components/NavBar";
import AnimatedRoutes from './Components/AnimatedRoutes';
import Footer from './Components/Footer';
import Email from './Components/Footer/email';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <AnimatedRoutes />
        <Footer />
        <Email />
      </Router>
    </>
  );
}

export default App;
