import { gql, GraphQLClient } from "graphql-request";

const hygraph = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

const Home = ({ data }) => {
  return <div>Home</div>;
};

export default Home;

const MyQuery = gql`
  {
    cPUs(where: { OR: [{ newProduct: true }, { promotion: true }] }) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
    }

    gPUs(where: { OR: [{ newProduct: true }, { promotion: true }] }) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
    }

    aUDIOs(where: { OR: [{ newProduct: true }, { promotion: true }] }) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
    }

    vIDEOs(where: { OR: [{ newProduct: true }, { promotion: true }] }) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
    }

    cOMPUTERs(where: { OR: [{ newProduct: true }, { promotion: true }] }) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
    }

    gAMINGs(where: { OR: [{ newProduct: true }, { promotion: true }] }) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
    }

    lAPTOPs(where: { OR: [{ newProduct: true }, { promotion: true }] }) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
    }

    sMARTWATCHs(where: { OR: [{ newProduct: true }, { promotion: true }] }) {
      id
      discountPercent
      images {
        url
      }
      newProduct
      onDiscount
      price
      promotion
      slug
      title
    }

    dEALs {
      title
      slug
      dealTitle
      description
      id
      images {
        url
      }
    }
  }
`;

export async function getServerSideProps() {
  const data = await hygraph.request(MyQuery);

  return {
    props: {
      data: data,
    },
  };
}
