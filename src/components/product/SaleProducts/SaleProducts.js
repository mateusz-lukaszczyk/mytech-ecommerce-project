import { Headings } from "../../headings/Headings";
import { ProductCard } from "../card/ProductCard";
import styles from "./SaleProducts.module.css";

export const SaleProducts = ({ saleProductsData }) => {
  const getValues = () => {
    let dataArray = [];
    let dataObject = {};

    Object.values(saleProductsData).forEach((item) => {
      item.map((element) => {
        dataObject.title = element.title;
        dataObject.price = element.price;
        dataObject.oldPrice = element.oldPrice;
        dataObject.id = element.id;
        dataObject.slug = element.slug;
        dataObject.image = element.images.url;
        dataObject.isProductSale = element.onDiscount;
        dataObject.discountPercent = element.discountPercent;
        dataArray.push(dataObject);
        dataObject = {};
      });
    });

    return dataArray;
  };

  const saleProductsFinalData = getValues();

  return (
    <section className={styles.sale__products__background}>
      <div className="container">
        <Headings
          heading="discounted products"
          description="Lorem ipsum dolor sit amet, urabitur mauris sapien magna."
        />
        <div className={styles.sale__products__content}>
          {saleProductsFinalData.map((item) => {
            return (
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                slug={item.slug}
                image={item.image}
                isProductSale={item.isProductSale}
                discountPercent={item.discountPercent}
                oldPrice={item.oldPrice}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
