import { useSelector } from "react-redux";
import Item from "../Item/index.item";
import { selectLoadingState, selectProducts } from "../../store/selector";

const ItemList = () => {
  const products = useSelector(selectProducts);
  const loadingState = useSelector(selectLoadingState);

  return (
    <div className="item-list-container">
      <ul>
        {loadingState === "loading" ? (
          <div>Loading...</div>
        ) : loadingState === "error" ? (
          <div>Error, please try again</div>
        ) : (
          products &&
          products.map((product) => <Item product={product} key={product.id} />)
        )}
      </ul>
    </div>
  );
};

export default ItemList;
