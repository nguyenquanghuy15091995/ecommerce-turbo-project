import { useEffect, useState, FC } from "react";
import ProductBanner, {
  ProductBannerData,
} from "ui/components/widgets/HeroBanner/Product";
import { WidgetData, WidgetPayload } from "./types";
import { fetchData } from "./utils";

interface BannerData {
  id?: number;
  alt_text?: string;
  url?: string;
  width?: number | string;
  height?: number | string;
  widget_id?: number;
}

export interface HeroBannerProps extends WidgetData {}

const HeroBanner: FC<HeroBannerProps> = ({ payload }) => {
  const [data, setData] = useState<ProductBannerData[]>([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch(
    //     "https://dev.api.yody.io/unicorn/storefront-core/widgets/1"
    //   );
    //   const resJson = await res.json();
    //   const temp: BannerData = JSON.parse(resJson?.payload || "") as BannerData;
    //   const items: ProductBannerData[] = [];
    //   temp.images.forEach((item) => {
    //     items.push({
    //       title: item.name,
    //       imageSrc: item.url,
    //       description: "description or overview",
    //       price: "400,000VND",
    //       priceWithDiscount: "100,000VND",
    //       promotionMessage: "promotion message",
    //     });
    //   });
    //   setData(items);
    // };
    // fetchData();
    const fetchEffect = async () => {
      const api = `${payload?.url || ""}/${payload?.widget_id || ""}`;
      const newPayload: WidgetPayload = { ...payload, url: api };
      const data = await fetchData(newPayload);
      if (data) {
        const finalData: BannerData[] = data as BannerData[];
        const prodSlideList: ProductBannerData[] = [];
        finalData.forEach((item, itemIdx) => {
          prodSlideList.push({
            title: `Slide ${itemIdx + 1}`,
            imageSrc: item.url,
            description: "description or overview",
            price: "400,000VND",
            priceWithDiscount: "100,000VND",
            promotionMessage: "promotion message",
          });
        });
        setData(prodSlideList);
      }
    };
    fetchEffect();
  }, []);

  return (
    <>
      <ProductBanner items={data} />
    </>
  );
};

export default HeroBanner;
