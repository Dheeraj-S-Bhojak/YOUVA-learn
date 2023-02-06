import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/about-us/about-us.component";
import Banner from "./components/banner/banner.component";
import Footer from "./components/footer/footer.component";
import NavBar from "./components/navbar/navBar.component";
import Support from "./components/support/support.component";
import Course from "./components/course/course.component";

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/contact-us" element={<Support />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
