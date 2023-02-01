import { Routes, Route } from "react-router-dom";
import Banner from "./components/banner/banner.component";
import Footer from "./components/footer/footer.component";
import NavBar from "./components/navbar/navBar.component";

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Banner />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
