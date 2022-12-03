import { gql } from "graphql-request";

export const saleProductQuery = gql`
  {
    cPUs(where: { onDiscount: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      onDiscount
      oldPrice
      discountPercent
    }

    gPUs(where: { onDiscount: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      onDiscount
      oldPrice
      discountPercent
    }

    aUDIOs(where: { onDiscount: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      onDiscount
      oldPrice
      discountPercent
    }

    vIDEOs(where: { onDiscount: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      onDiscount
      oldPrice
      discountPercent
    }

    vIDEOs(where: { onDiscount: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      onDiscount
      oldPrice
      discountPercent
    }

    cOMPUTERs(where: { onDiscount: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      onDiscount
      oldPrice
      discountPercent
    }

    gAMINGs(where: { onDiscount: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      onDiscount
      oldPrice
      discountPercent
    }

    lAPTOPs(where: { onDiscount: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      onDiscount
      oldPrice
      discountPercent
    }

    sMARTWATCHs(where: { onDiscount: true }) {
      id
      images {
        url
      }
      price
      slug
      title
      onDiscount
      oldPrice
      discountPercent
    }
  }
`;
