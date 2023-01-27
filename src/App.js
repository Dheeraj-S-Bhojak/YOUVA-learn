import BannerForm from "./components/banner-form/banner-form.tsx";
import NavBar from "./components/navbar/navBar.component.tsx";
import Banner from './components/banner/banner.component.tsx';

const App = () => {
  return (
    <main>
      <NavBar />
      <BannerForm />
      <Banner />
    </main>
  );
};

export default App;
