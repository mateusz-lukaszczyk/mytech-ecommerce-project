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
