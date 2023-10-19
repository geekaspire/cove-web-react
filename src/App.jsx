import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import AuthUpdateUserDetails from "./pages/AuthUpdateUserDetailsPage/AuthUpdateUserDetailsPage";
import VerifyAadharPage from "./pages/VerifyAadharPage/VerifyAadharPage";
import RoommatesPage from "./pages/RoommatesPage/RoommatesPage";
import RoommateDetailPage from "./pages/RoommateDetailPage/RoommateDetailPage";
import PropertyDetailPage from "./pages/PropertyDetailPage/PropertyDetailPage";
import PropertyPage from "./pages/PropertyPage/PropertyPage";

import NavBar from "./components/NavBar/NavBar";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import FooterMain from "./components/FooterMain/FooterMain";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <NavBar />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* AUTH ROUTES */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/setup-profile" element={<AuthUpdateUserDetails />} />
        <Route path="/verify-aadhar" element={<VerifyAadharPage />} />

        {/* ROOMMATE ROUTES */}
        <Route path="/roommate" element={<RoommatesPage />} />
        <Route path="/roommate/:id" element={<RoommateDetailPage />} />

        {/* PROPERTY ROUTES */}
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
      </Routes>

      <BottomNavigation />
      <FooterMain />
    </>
  );
}

export default App;
