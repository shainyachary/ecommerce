import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
