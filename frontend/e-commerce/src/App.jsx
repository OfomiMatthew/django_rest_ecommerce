import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Homescreen from "./components/screens/Homescreen";
import Loginscreen from "./components/screens/Loginscreen";
import Signupscreen from "./components/screens/Signupscreen";
import Cartscreen from "./components/screens/Cartscreen";


import { HashRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homescreen />}></Route>
        </Routes>

        <Routes>
        <Route exact path="/login" element={<Loginscreen />}></Route>
      </Routes>

      <Routes>
      <Route exact path="/signup" element={<Signupscreen />}></Route>
    </Routes>

    <Routes>
    <Route exact path="/cart" element={<Cartscreen />}></Route>
  </Routes>
      </Router>
    </div>
  );
};

export default App;
