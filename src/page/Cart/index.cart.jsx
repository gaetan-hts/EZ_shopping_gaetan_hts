import { useDispatch, useSelector } from "react-redux";
import Navigation from "../../component/Navigation/index.navigation";
import { clearCart } from "../../store/slice/cartSlice";
import Item from "../../component/Item/index.item";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleSaveCart = () => {
    localStorage.setItem("finalCart", JSON.stringify(cart));
    alert("Thank you for your order !!!");
  };

  return (
    <div>
      <Navigation />
      <header>
        <h2>Hi user</h2>
        <p>There are {cart.length} items in your basket</p>
        <button onClick={handleClearCart}>Clear Cart</button>
        <button onClick={handleSaveCart}>Confirm order</button>
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
  );
};

export default Cart;
