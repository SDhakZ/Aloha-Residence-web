import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Navbarmenu from "./layouts/Navbarmenu";
import { ContactUs } from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbarmenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
