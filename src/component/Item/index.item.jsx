/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../../store/slice/cartSlice";

const Item = ({ product, isCart }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: product.id,
        quantity: parseInt(quantity, 10),
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.image,
      })
    );
    setQuantity(1);
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ id: product.id }));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
  };

  return (
    <li className="item-container">
      <div className="item-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="item-details">
        <h2>
          {product.title} <strong>{product.category}</strong>
        </h2>
        <h3>{product.description}</h3>
        <div className="item-price">${product.price}</div>
        {isCart ? (
          <label>
            Quantity :
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </label>
        ) : (
          <label>
            Quantity :
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
        )}

        {isCart ? (
          <button onClick={handleRemove}>Remove</button>
        ) : (
          <button onClick={handleAdd}>Add to Cart</button>
        )}
      </div>
    </li>
  );
};

export default Item;
