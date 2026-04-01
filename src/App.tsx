import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
<div>
  <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
      
      <Footer/>
    </div>
  );
}
