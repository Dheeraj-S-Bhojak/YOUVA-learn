import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/component/navBar.component.tsx";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<NavBar />}></Route>
      </Routes>
    </main>
  );
};

export default App;
