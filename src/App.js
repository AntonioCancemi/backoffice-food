import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Topnav from "./components/Topnav";
import LonginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useDispatch, useSelector } from "react-redux";
import ProductsPage from "./pages/ProductsPage";
import { useEffect } from "react";
import { logout } from "./redux/actions/authAction";
import { Container } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.user);
  useEffect(() => {
    if (!sessionStorage.getItem("user")) {
      dispatch(logout());
    }
  }, []);
  return (
    <Router>
      <Topnav />
      <Container fluid className="mt-5 pt-5">
        {auth ? (
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        ) : (
          <Routes location={"/login"}>
            <Route path="/login" element={<LonginPage />} />
          </Routes>
        )}
      </Container>
    </Router>
  );
}

export default App;
