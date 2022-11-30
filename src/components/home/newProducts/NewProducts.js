import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import arrow from "../../../assets/images/arrow2.png";
import ProductsCard from "../../cards/ProductsCard";
import styles from "./NewProducts.module.css";

const hygraph = new GraphQLClient(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  },
});

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

const NewProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getNewProducts() {
      const data = await hygraph.request(query);
      setData(data);
    }
    getNewProducts();
  }, []);

  const newProductsArr = Object.values(data);

  const getValues = () => {
    let dataArray = [];
    let dataObject = {};

    newProductsArr.map((item) => {
      item.map((element) => {
        dataObject.title = element.title;
        dataObject.price = element.price;
        dataObject.id = element.id;
        dataObject.slug = element.slug;
        dataObject.brand = element.brand;
        dataObject.image = element.images.url;
        dataObject.statusNew = element.newProduct;
        dataArray.push(dataObject);
        dataObject = {};
      });
    });

    return dataArray;
  };

  const newProductsData = getValues();

  return (
    <div className={`${styles.newProducts__wrapper} container`}>
      <div className={styles.newProducts__headings}>
        <h1 className={styles.newProducts__heading}>New products</h1>
        <p className={styles.newProducts__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          mauris sapien magna.
        </p>
        <Image
          className={styles.newProducts__arrow}
          src={arrow}
          alt="Arrow picture"
        />
      </div>
      <Swiper
        style={{
          "--swiper-navigation-size": "15px",
        }}
        navigation={true}
        freeMode={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {newProductsData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ProductsCard
                title={item.title}
                price={item.price}
                slug={item.slug}
                image={item.image}
                statusNew={item.statusNew}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NewProducts;
