import { FC } from "react";
import Typography, {
  TypographyProps,
} from "ui/components/foundation/Typography";
import ImageWrapper, {
  ImageWrapperProps,
} from "ui/components/foundation/ImageWrapper";

export interface CategoryCardProps {
  title?: string;
  titleProps?: Omit<TypographyProps, "children">;
  description?: string;
  descriptionProps?: Omit<TypographyProps, "children">;
  image?: ImageWrapperProps;
}

export const CategoryCard: FC<CategoryCardProps> = ({
  title,
  titleProps,
  description,
  descriptionProps,
  image,
}) => {
  return (
    <>
      <div>
        <ImageWrapper width={200} height={200} className="w-full object-contain" {...image} />
      </div>
      <div className="pt-4">
        <div className="pb-2">
          <Typography
            htmlElementTag="p"
            className="text-yd-heading-6 text-black"
            {...titleProps}
          >
            {title}
          </Typography>
        </div>
        <div>
          <Typography
            htmlElementTag="p"
            className="text-yd-body-2"
            {...descriptionProps}
          >
            {description}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
