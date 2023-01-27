import { Route, Routes } from "react-router-dom";
import BannerForm from "./components/banner-form/banner-form.tsx";
import NavBar from "./components/navbar/navBar.component.tsx";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Banner />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
