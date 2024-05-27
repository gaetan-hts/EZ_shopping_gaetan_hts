import { useSelector } from "react-redux";
import Item from "../Item/index.item";

const ItemList = () => {
  const products = useSelector((state) => state.products.products);

  console.log(products);
  return (
    <div className="item-list-container">
      <ul>
        {products &&
          products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
};

export default ItemList;
