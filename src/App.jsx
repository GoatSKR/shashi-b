import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";


function App() {


  return (
    <Routes>
      <Route exact path="/*" element={<Home />} />
      <Route exact path="/About" element={<AboutUs />}/>
      <Route exact path="/Contacts" element={<Contact />}/>
    </Routes>
  )
}

export default App
