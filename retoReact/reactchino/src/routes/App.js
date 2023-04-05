import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../containers/Home";
import Carrito from "../containers/Carrito";
import Producto from "../containers/Producto";
import Layout from "../components/Layout";
import UsarContexto from "../context/UsarContexto";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UsarContexto>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/carrito.html" element={<Carrito />}></Route>
              <Route path="/producto.html" element={<Producto />}></Route>
            </Routes>
          </Layout>
        </UsarContexto>
      </BrowserRouter>

    </div>
  );
}

export default App;
