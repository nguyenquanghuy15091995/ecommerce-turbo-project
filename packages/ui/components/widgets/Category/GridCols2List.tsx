import { FC } from "react";
import Typography, {
  TypographyProps,
} from "ui/components/foundation/Typography";
import CategoryCard from "ui/components/templates/Card/Category";
import { CategoryData } from "ui/types/Category";
export interface GridCols2CategoryListProps {
  title?: string;
  titleProps?: Omit<TypographyProps, "children">;
  items?: CategoryData[];
}

export const GridCols2CategoryList: FC<GridCols2CategoryListProps> = ({
  title,
  titleProps,
  items,
}) => {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="pb-10">
          <Typography
            className="text-yd-heading-6 text-black uppercase"
            {...titleProps}
          >
            {title}
          </Typography>
        </div>
        {Array.isArray(items) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5 pb-7">
            {items.map((item, itemIdx) => (
              <div key={itemIdx}>
                <CategoryCard
                  title={item.name}
                  description={item.description}
                  image={{
                    src: item.image,
                  }}
                />
              </div>
            ))}
          </div>
        )}
        <div>
          <Typography className="text-yd-heading-7 text-black text-center uppercase">
            Xem tat ca
          </Typography>
        </div>
      </div>
    </>
  );
};

export default GridCols2CategoryList;
