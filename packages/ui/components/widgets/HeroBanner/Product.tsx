import { FC } from "react";

import SimpleSlider, { SimpleSliderItem } from "ui/components/templates/Slider/Simple";
import Typography from "ui/components/foundation/Typography";

export interface ProductBannerData {
  title?: string;
  description?: string;
  price?: string;
  priceWithDiscount?: string;
  promotionMessage?: string;
  imageSrc?: string;
}

export interface ProductBannerProps {
  items?: ProductBannerData[];
}

export const ProductBanner: FC<ProductBannerProps> = ({ items }) => {
  if (!Array.isArray(items)) {
    return <></>;
  }
  return (
    <>
      <SimpleSlider>
        {items.map((item, itemIdx) => (
          <SimpleSliderItem
            key={itemIdx}
            imageProps={{
              src: item.imageSrc,
              width: 1440,
              height: 656,
              className: "w-full",
            }}
          >
            {item.description && (
              <div className="pb-10">
                <Typography
                  htmlElementTag="h3"
                  className="text-yd-heading-3 text-white"
                >
                  {item.description}
                </Typography>
              </div>
            )}
            {item.title && (
              <div className="pb-10">
                <Typography
                  htmlElementTag="h5"
                  className="text-yd-heading-5 text-white"
                >
                  {item.title}
                </Typography>
              </div>
            )}
            {item.price && (
              <div className="pb-2">
                <Typography
                  htmlElementTag="h5"
                  className={`text-yd-heading-5 text-white${
                    item.priceWithDiscount ? " line-through" : ""
                  }`}
                >
                  {item.price}
                </Typography>
              </div>
            )}
            {item.priceWithDiscount && (
              <div className="pb-2">
                <Typography
                  htmlElementTag="h5"
                  className="text-yd-heading-5 text-white"
                >
                  {item.priceWithDiscount}
                </Typography>
              </div>
            )}
            {item.promotionMessage && (
              <div>
                <Typography
                  htmlElementTag="p"
                  className="text-yd-body-2 text-white"
                >
                  {item.promotionMessage}
                </Typography>
              </div>
            )}
          </SimpleSliderItem>
        ))}
      </SimpleSlider>
    </>
  );
};

export default ProductBanner;
