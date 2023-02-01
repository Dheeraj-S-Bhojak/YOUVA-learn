import { Routes, Route } from "react-router-dom";
import Banner from "./components/banner/banner.component";
import Footer from "./components/footer/footer.component";
import NavBar from "./components/navbar/navBar.component";
import Support from "./components/support/support.component";

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/contact-us" element={<Support />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
