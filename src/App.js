import { Route, Routes } from "react-router-dom";
import BannerForm from "./components/banner-form/banner-form.tsx";
import NavBar from "./components/navbar/navBar.component.tsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <BannerForm />
    </div>
  );
};

export default App;
