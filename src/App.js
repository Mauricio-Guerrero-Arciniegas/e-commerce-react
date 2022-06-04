import { Home, Purchases, Login, ProductsDetail } from "./pages"; 
import './styles.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { LoadingScreen } from "./components";
import { useSelector } from "react-redux";

function App() {

  const isLoading = useSelector(state => state.isLoading);
  return (
    <HashRouter>
      <Container>
        { isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
