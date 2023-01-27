import { Route, Routes } from "react-router-dom";
import Banner from "./components/banner/banner.component.tsx";
import NavBar from "./components/navbar/navBar.component.tsx";

const App = () => {
  return (
    <main>
      <NavBar />
      <Banner />
    </main>
  );
};

export default App;
