import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle/index.darkModeToggle";
import { selectCart, selectUser } from "../../store/selector";

const Navigation = () => {
  const [cartNumber, setCartNumber] = useState(0);
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    let totalItems = 0;
    parsedCart.forEach((item) => {
      totalItems += item.quantity;
    });
    setCartNumber(totalItems);
  }, [cart]);

  useEffect(() => {
    const handleResize = () => {
      setShowBurger(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <h1 className="logo">
        <NavLink to={"/"}>EZ Shopping</NavLink>
      </h1>
      {showBurger ? (
        <div className="burger-menu" onClick={toggleMenu}>
          {isMenuOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      ) : (
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
      )}
      {isMenuOpen && (
        <div className="nav-mobile">
          <div className="user-info-mobile">
            <NavLink to={"/user"} onClick={closeMenu}>
              <i className="fa-solid fa-user"></i> {user.name} {user.lastName}
            </NavLink>
          </div>
          <NavLink to={"/cart"} onClick={closeMenu}>
            <i className="fa-solid fa-cart-shopping"></i> {cartNumber}{" "}
            {cartNumber > 1 ? "items" : "item"}
          </NavLink>
          <DarkModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
