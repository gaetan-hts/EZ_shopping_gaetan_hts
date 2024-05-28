import { useDispatch, useSelector } from "react-redux";
import Navigation from "../../component/Navigation/index.navigation";
import { clearCart } from "../../store/slice/cartSlice";
import Item from "../../component/Item/index.item";
import { selectCart, selectUser } from "../../store/selector";

const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleSaveCart = () => {
    localStorage.setItem("finalCart", JSON.stringify(cart));
    alert("Thank you for your order !!!");
    dispatch(clearCart());
  };

  return (
    <>
      <Navigation />
      <div className="cart-container">
        <header>
          <h2>Hi {user.name}</h2>
          <h3>There are {cart.length} items in your basket</h3>
          <div className="btn-container">
            <button onClick={handleClearCart}>Clear Cart</button>
            <button onClick={handleSaveCart}>Confirm order</button>
          </div>
        </header>
        <hr />
        <div className="cart-list-container">
          <ul>
            {cart &&
              cart.map((product) => (
                <Item key={product.id} product={product} isCart={true} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cart;
