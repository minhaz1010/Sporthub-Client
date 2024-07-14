import LazyLoad from "../../utils/LazyComponent";
import Carousel from "./Homepage/Carousel";
import FeaturedProduct from "./Homepage/FeaturedProduct";
import ShopByCategory from "./Homepage/ShopByCategory";

const LazyCarousel = LazyLoad(Carousel);
const LazyCategory = LazyLoad(ShopByCategory)
const LazyProducts = LazyLoad(FeaturedProduct);
const Home = () => {
  return (
    <div>
      <LazyCarousel></LazyCarousel>
      <LazyCategory></LazyCategory>
      <LazyProducts></LazyProducts>
    </div>
  );
};

export default Home;
