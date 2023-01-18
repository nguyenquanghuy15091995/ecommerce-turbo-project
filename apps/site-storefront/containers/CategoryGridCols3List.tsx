import { FC, useState, useEffect } from "react";

import GridCols3CategoryList from "ui/components/widgets/Category/GridCols3List";
import { CategoryData } from "ui/types/Category";
import { WidgetData } from "./types";
import { fetchData } from "./utils";

export interface HardCodeProduct {
  id: number;
  ecommerce_variant: string;
  core_variant: string;
  ecommerce_image_url: string;
}

export interface CategoryGridCols3ListProps extends WidgetData {
  data?: {
    items?: HardCodeProduct[];
  };
}

const CategoryGridCols3List: FC<CategoryGridCols3ListProps> = ({
  widget_name,
  payload,
}) => {
  const [categories, setCategories] = useState<CategoryData[]>();

  useEffect(() => {
    const fetchEffect = async () => {
      const data = await fetchData(payload, "limit=6");
      if (data) {
        const finalData = data as { data: { items: HardCodeProduct[] } };
        const arrCategory: CategoryData[] = [];
        finalData.data.items.forEach((item) => {
          arrCategory.push({
            name: item.core_variant,
            description: item.ecommerce_variant,
            image: item.ecommerce_image_url,
          });
        });
        setCategories(arrCategory);
      }
    };
    fetchEffect();
  }, []);

  return (
    <>
      <GridCols3CategoryList title={widget_name} items={categories} />
    </>
  );
};

export default CategoryGridCols3List;
