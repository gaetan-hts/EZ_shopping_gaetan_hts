import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle/index.darkModeToggle";
import { selectCart, selectUser } from "../../store/selector";

const Navigation = () => {
  const [cartNumber, setCartNumber] = useState(0);
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    let totalItems = 0;
    parsedCart.forEach((item) => {
      totalItems += item.quantity;
    });
    setCartNumber(totalItems);
  }, [cart]);

  return (
    <nav>
      <h1 className="logo">
        <NavLink to={"/"}>EZ Shopping</NavLink>
      </h1>
      <div className="nav-right-side">
        <div className="user-info">
          <NavLink to={"/user"}>
            <i className="fa-solid fa-user"></i> {user.name} {user.lastName}
          </NavLink>
        </div>
        <NavLink to={"/cart"}>
          <i className="fa-solid fa-cart-shopping"></i> {cartNumber}{" "}
          {cartNumber > 1 ? "items" : "item"}
        </NavLink>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
