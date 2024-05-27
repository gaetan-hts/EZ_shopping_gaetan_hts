import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/index.home";
import Cart from "./page/Cart/index.cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./store/slice/productsSlice";
import User from "./page/User/index.user";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/cart"} element={<Cart />} />
      <Route path={"/user"} element={<User />} />
      <Route path={"*"} element={<div>Oups, you seems lost</div>} />
    </Routes>
  );
}

export default App;
