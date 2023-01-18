import { useMemo } from "react";
import dynamic from "next/dynamic";
import { WidgetData } from "./types";
const HeroBanner = dynamic(() => import("./HeroBanner"), { ssr: false });
const CategoryGridCols2List = dynamic(() => import("./CategoryGridCols2List"), {
  ssr: false,
});
const CategoryGridCols3List = dynamic(() => import("./CategoryGridCols3List"), {
  ssr: false,
});

const widget_list = [
  {
    code: "product-banner",
    ComponentTemplate: HeroBanner,
  },
  {
    code: "category-grid-cols-2",
    ComponentTemplate: CategoryGridCols2List,
  },
  {
    code: "category-grid-cols-3",
    ComponentTemplate: CategoryGridCols3List,
  },
];

export const renderWidgets = (widgets: WidgetData[]) => {
  return (
    <>
      {widgets.map((item, itemIdx) => {
        const WidgetTag = widget_list.find(
          (temp) => temp.code === item.component_view
        );
        return (
          <div key={itemIdx}>
            {WidgetTag && !item.hidden && (
              <WidgetTag.ComponentTemplate {...item} />
            )}
          </div>
        );
      })}
    </>
  );
};

export function useWidget(widgets: WidgetData[]) {
  const widgetMemo = useMemo(() => renderWidgets(widgets), [widgets]);
  return widgetMemo;
}
