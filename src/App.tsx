import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/HomePage";
import ProfileSelector from "./components/ProfileSelector";
import { NavbarComponent } from "./components/NavbarComponent";

export default function App() {

  // const hideNavbar = location.pathname === "/login" || location.pathname === "/cadastrar";

  return (
    <>
      <NavbarComponent/>

      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        />
        <Route
          path="/montagem"
          element={
              <ProfileSelector />
          }
        />
      </Routes>
    </>
  );
}