import "./style/app.css";
import Home from "./page/Home.jsx";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";
import SearchPage from "./page/SearchPage.js";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
