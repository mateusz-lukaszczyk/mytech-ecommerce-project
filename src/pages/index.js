import DealBanner from "../components/home/dealBanner/DealBanner";
import Hero from "../components/home/hero/Hero";
import NewProducts from "../components/home/newProducts/NewProducts";
import ProductsBanner from "../components/home/productsBanner/ProductsBanner";

const Home = () => {
  return (
    <main>
      <Hero />
      <ProductsBanner />
      <NewProducts />
      <DealBanner />
    </main>
  );
};

export default Home;
