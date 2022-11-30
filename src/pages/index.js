import Hero from "../components/home/hero/Hero";
import NewProducts from "../components/home/newProducts/NewProducts";
import ProductsBanner from "../components/home/productsBanner/ProductsBanner";

const Home = () => {
  return (
    <main>
      <Hero />
      <ProductsBanner />
      <NewProducts />
    </main>
  );
};

export default Home;
