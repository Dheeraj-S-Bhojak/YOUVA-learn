import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/component/navBar.component.tsx";
import Home from "./components/home/home.component.tsx";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
