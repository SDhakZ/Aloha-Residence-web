import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbarmenu from "./layouts//Navbar/Navbarmenu";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./layouts/Footer/Footer";
import FAQ from "./pages/FAQ/FAQ";
import Layouts from "./pages/Layouts/Layouts";
import AboutUs from "./pages/AboutUs/AboutUs";
import Gallery from "./pages/Gallery/Gallery";
import OurOfferings from "./pages/OurOfferings/OurOfferings";
import { HelmetProvider } from "react-helmet-async";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <HelmetProvider>
        <Router basename="/">
          <Navbarmenu />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="layouts" element={<Layouts />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="our-offerings" element={<OurOfferings />} />
            <Route
              path="*"
              element={
                <ErrorPage
                  errorTitle="Page Not Found"
                  errorMessage="Sorry, the page could not be found"
                  showBtns={true}
                />
              }
            />
          </Routes>
        </Router>
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;
