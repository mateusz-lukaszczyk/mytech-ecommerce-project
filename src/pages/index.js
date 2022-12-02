import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { GraphQLClient } from "graphql-request";
import { Features } from "../components/home/features/Features";
import { Hero } from "../components/home/hero/Hero";
import { DealBanner } from "../components/product/dealBanner/DealBanner";
import { NewProducts } from "../components/product/newProducts/NewProducts";
import { ProductsBanner } from "../components/product/productsBanner/ProductsBanner";
import { dealBannerQuery } from "../utils/queries/dealBannerQuery";
import { newProductQuery } from "../utils/queries/newProductQuery";

const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

const Home = ({ newProductsData, dealBannerData }) => (
  <div>
    <Hero />
    <ProductsBanner />
    <NewProducts newProductsData={newProductsData} />
    <Features />
    <DealBanner dealBannerData={dealBannerData} />
  </div>
);

export default Home;

export async function getServerSideProps() {
  const newProductsData = await hygraph.request(newProductQuery);
  const dealBannerData = await hygraph.request(dealBannerQuery);

  return {
    props: {
      newProductsData: newProductsData,
      dealBannerData: dealBannerData,
    },
  };
}
