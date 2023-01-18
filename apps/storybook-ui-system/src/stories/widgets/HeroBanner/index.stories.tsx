import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductBannerWidget, {
  ProductBannerData,
} from "ui/components/widgets/HeroBanner/Product";
export default {
  title: "Yody UI System/Widgets/Hero Banner",
  component: undefined,
} as ComponentMeta<any>;

const productBannerList: ProductBannerData[] = [
  {
    title: "Áo polo nam mắt chim kẻ bo",
    description: "Chiếc áo polo không thể thiếu cho mùa hè",
    price: "399.000 VNĐ",
    priceWithDiscount: "299.000 VNĐ",
    promotionMessage: "Khuyến mãi có hạn từ 01/01 đến 31/01",
    imageSrc: "https://dummyimage.com/1440x656/000/6e6e6e.jpg",
  },
  {
    title: "Áo polo nam mắt chim kẻ bo",
    description: "Chiếc áo polo không thể thiếu cho mùa hè",
    price: "399.000 VNĐ",
    priceWithDiscount: "299.000 VNĐ",
    promotionMessage: "Khuyến mãi có hạn từ 01/01 đến 31/01",
    imageSrc: "https://dummyimage.com/1440x656/000/6e6e6e.jpg",
  },
  {
    title: "Áo polo nam mắt chim kẻ bo",
    description: "Chiếc áo polo không thể thiếu cho mùa hè",
    price: "399.000 VNĐ",
    priceWithDiscount: "299.000 VNĐ",
    promotionMessage: "Khuyến mãi có hạn từ 01/01 đến 31/01",
    imageSrc: "https://dummyimage.com/1440x656/000/6e6e6e.jpg",
  },
  {
    title: "Áo polo nam mắt chim kẻ bo",
    description: "Chiếc áo polo không thể thiếu cho mùa hè",
    price: "399.000 VNĐ",
    priceWithDiscount: "299.000 VNĐ",
    promotionMessage: "Khuyến mãi có hạn từ 01/01 đến 31/01",
    imageSrc: "https://dummyimage.com/1440x656/000/6e6e6e.jpg",
  },
  {
    title: "Áo polo nam mắt chim kẻ bo",
    description: "Chiếc áo polo không thể thiếu cho mùa hè",
    price: "399.000 VNĐ",
    priceWithDiscount: "299.000 VNĐ",
    promotionMessage: "Khuyến mãi có hạn từ 01/01 đến 31/01",
    imageSrc: "https://dummyimage.com/1440x656/000/6e6e6e.jpg",
  },
];

export const ProductBanner: ComponentStory<any> = ({}) => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="hidden">
          <div className="pb-10" />
          <div className="pb-2 line-through" />
        </div>

        <ProductBannerWidget items={productBannerList} />
      </div>
    </>
  );
};
