import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle/index.darkModeToggle";

const Navigation = () => {
  const [cartNumber, setCartNumber] = useState(0);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

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
    <div>
      <NavLink to={"/"}>
        <h1 className="logo">EZ Shopping</h1>
      </NavLink>
      <div className="nav-right-side">
        <div className="user-info">
          <NavLink to={"/user"}>
            icon {user.name} {user.lastName}
          </NavLink>
        </div>
        <NavLink to={"/cart"}>icon {cartNumber} item(s)</NavLink>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navigation;
