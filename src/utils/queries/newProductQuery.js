import { gql } from "graphql-request";

export const newProductQuery = gql`
  {
    cPUs(where: { newProduct: true }) {
      id
      images {
        url
      }
      price
      slug
      title
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
      newProduct
    }

    cOMPUTERs(where: { newProduct: true }) {
      id
      images {
        url
      }
      price
      slug
      title
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
      newProduct
    }
  }
`;
