import { gql } from "graphql-request";

export const dealBannerQuery = gql`
  {
    dEALs {
      description
      dealTitle
      discountPercent
      price
      slug
      title
      oldPrice
    }
  }
`;
