import Category from "../Category/Category.js";
import PopularJewelry from "../PopularJewelry/PopularJewelry.js";
import Storiess from "../Storiess/Storiess.js";
import TopPic from "../TopPic/TopPic.js";

const Home = ({ products }) => {
 
  return (
    <>
      {products && products ? (
        <>
          <TopPic />
          <PopularJewelry popular={products.Popular} />
          <Category category={products.Category} />
          <Storiess stories={products.Stories} />
        </>
      ) : null}
    </>
  );
};

export default Home;
