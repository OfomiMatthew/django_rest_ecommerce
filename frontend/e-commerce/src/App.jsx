import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Container>
        <h1>Welcome to DRF</h1>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default App;
