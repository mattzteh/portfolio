import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from "./Components/NavBar";
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
