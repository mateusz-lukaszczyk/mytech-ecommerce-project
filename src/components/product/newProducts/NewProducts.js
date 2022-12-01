import Image from "next/image";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import arrow from "../../../assets/images/arrow.png";
import { ProductCard } from "../card/ProductCard";
import styles from "./NewProducts.module.css";

export const NewProducts = ({ newProductsData }) => {
  const getValues = () => {
    let dataArray = [];
    let dataObject = {};

    Object.values(newProductsData).forEach((item) => {
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
    <section className={`${styles.new__products__wrapper} container`}>
      <div className={styles.new__products__headings}>
        <h1 className={styles.new__products__heading}>New products</h1>
        <p className={styles.new__products__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          mauris sapien magna.
        </p>
        <Image
          className={styles.new__products__arrow}
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
              <ProductCard
                title={item.title}
                price={item.price}
                slug={item.slug}
                image={item.image}
                isProductNew={item.statusNew}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
