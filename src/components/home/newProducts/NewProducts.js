import Image from "next/image";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import arrow from "../../../assets/images/arrow2.png";
import ProductsCard from "../../cards/ProductsCard";
import styles from "./NewProducts.module.css";

const NewProducts = ({ newProductsData }) => {
  const newProductsArr = Object.values(newProductsData);

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

  const newProductsFinalData = getValues();

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
        {newProductsFinalData.map((item) => {
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
