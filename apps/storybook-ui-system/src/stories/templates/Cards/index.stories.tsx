import { ComponentStory, ComponentMeta } from "@storybook/react";
import CategoryCard from "ui/components/templates/Card/Category";
import ImageSrc from "./assets/img/imgCard.jpg";

export default {
  title: "Yody UI System/templates/Cards",
  component: undefined,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<any>;

export const Category: ComponentStory<any> = () => {
  return (
    <div className="container mx-auto">
      <CategoryCard
        title="Ao Polo"
        description="Ao polo description"
        image={{
          src: ImageSrc,
          width: 200,
          height: 200,
          className: "w-full",
        }}
      />
    </div>
  );
};
