import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Payment from "./pages/Payment"; // <-- import Payment page
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Testimonials />
              <Contact />
            </>
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payment" element={<Payment />} /> {/* <-- new payment route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
