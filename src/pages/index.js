import { gql, GraphQLClient } from "graphql-request";
import DealBanner from "../components/home/dealBanner/DealBanner";
import Hero from "../components/home/hero/Hero";
import NewProducts from "../components/home/newProducts/NewProducts";
import ProductsBanner from "../components/home/productsBanner/ProductsBanner";

const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

const Home = ({ newProductsData }) => {
  return (
    <main>
      <Hero />
      <ProductsBanner />
      <NewProducts newProductsData={newProductsData} />
      <DealBanner />
    </main>
  );
};

export default Home;

const query = gql`
  {
    cPUs(where: { newProduct: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      brand
      newProduct
    }

    gPUs(where: { newProduct: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      brand
      newProduct
    }

    aUDIOs(where: { newProduct: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      brand
      newProduct
    }

    vIDEOs(where: { newProduct: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      brand
      newProduct
    }

    vIDEOs(where: { newProduct: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      brand
    }

    cOMPUTERs(where: { newProduct: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      brand
      newProduct
    }

    gAMINGs(where: { newProduct: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      brand
      newProduct
    }

    lAPTOPs(where: { newProduct: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      brand
      newProduct
    }

    sMARTWATCHs(where: { newProduct: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      brand
      newProduct
    }
  }
`;

export async function getServerSideProps() {
  const newProductsData = await hygraph.request(query);

  return {
    props: {
      newProductsData: newProductsData,
    },
  };
}
