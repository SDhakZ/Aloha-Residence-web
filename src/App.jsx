import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Navbarmenu from "./layouts//Navbar/Navbarmenu";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./layouts/Footer/Footer";
import FAQ from "./pages/FAQ/FAQ";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbarmenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="faq" element={<FAQ />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
