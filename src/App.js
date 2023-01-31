import { Routes, Route } from "react-router-dom";
import Banner from "./components/banner/banner.component.tsx";
import Footer from "./components/footer/footer.component.tsx";
import NavBar from "./components/navbar/navBar.component.tsx";

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
