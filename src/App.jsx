import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Navbarmenu from "./layouts//Navbar/Navbarmenu";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./layouts/Footer/Footer";
import FAQ from "./pages/FAQ/FAQ";
import Layouts from "./pages/Layouts/Layouts";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbarmenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="layouts" element={<Layouts />} />
          <Route path="about-us" element={<AboutUs />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
