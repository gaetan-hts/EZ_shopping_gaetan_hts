import ItemList from "../../component/ItemList/index.itemList";
import Navigation from "../../component/Navigation/index.navigation";

const Home = () => {
  return (
    <div className="home-container">
      <Navigation />
      <ItemList />
    </div>
  );
};

export default Home;
