import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";

import BottomNavigation from "./components/BottomNavigation/BottomNavigation";

import "./App.css";
import FooterMain from "./components/FooterMain/FooterMain";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <BottomNavigation />
      <FooterMain />
    </>
  );
}

export default App;
