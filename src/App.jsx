import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Navbarmenu from "./layouts/Navbarmenu";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbarmenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
