import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { GraphQLClient } from "graphql-request";
import { Hero } from "../components/home/hero/Hero";
import { DealBanner } from "../components/product/dealBanner/DealBanner";
import { NewProducts } from "../components/product/newProducts/NewProducts";
import { ProductsBanner } from "../components/product/productsBanner/ProductsBanner";
import { newProductQuery } from "../utils/queries/newProductQuery";

const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

const Home = ({ newProductsData }) => (
  <div>
    <Hero />
    <ProductsBanner />
    <NewProducts newProductsData={newProductsData} />
    <DealBanner />
  </div>
);

export default Home;

export async function getServerSideProps() {
  const newProductsData = await hygraph.request(newProductQuery);

  return {
    props: {
      newProductsData: newProductsData,
    },
  };
}
