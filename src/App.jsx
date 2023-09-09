import { Navigate, Route, Routes, redirect, useNavigate } from "react-router-dom";
import BasvuruSayfasi from "./pages/BasvuruSayfasi";
import Header from "./components/Header";
import IsIlanlariSayfasi from "./pages/IsIlanlariSayfasi";
import AdaySayfasi from "./pages/AdaySayfasi";
import IlanEKleme from "./components/IlanEkleme";
import GirisSayfasi from "./pages/GirisSayfasi";
import IletisimSayfasi from "./pages/IletisimSayfasi";
import KayitSayfasi from "./pages/KayitSayfasi";
import KariyerSayfasi from "./pages/KariyerSayfasi";
import Footer from "./components/Footer";
import LoginSayfasi from "./pages/LoginSayfasi";
import IlanBasvuruSayfasi from "./pages/IlanBasvuruSayfasi";
import { useEffect } from "react";

function App() {

  return (
    <>
    <Header/>
    
      <Routes>
        <Route path="/giris" element={ localStorage.getItem("tokenKey") != null ? <Navigate to="/"/> :<LoginSayfasi />} />
        <Route path="/is-ilanlari" element={<IsIlanlariSayfasi />} />
        <Route path="/is-ilanlari/:isIlani" element={<BasvuruSayfasi />} />
        <Route path="/aday/:uid" element={<AdaySayfasi />} />
        <Route path="/is-ilanlari/ilanEkleme" element={<IlanEKleme />} />
        <Route path="/" element={<GirisSayfasi />} />
        <Route path="/kariyer" element={<KariyerSayfasi />} />
        <Route path="/iletisim" element={<IletisimSayfasi />} />
        <Route path="/kaydol" element={ localStorage.getItem("tokenKey") != null ?  <Navigate to="/"/> : <KayitSayfasi />} />
        <Route path="/is-ilanlari/:isIlani/basvur" element={<IlanBasvuruSayfasi />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
