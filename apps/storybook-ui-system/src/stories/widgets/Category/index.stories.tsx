import { ComponentStory, ComponentMeta } from "@storybook/react";
import GridCols2CategoryList from "ui/components/widgets/Category/GridCols2List";
import GridCols3CategoryList from "ui/components/widgets/Category/GridCols3List";
import { CategoryData } from "ui/types/Category";
export default {
  title: "Yody UI System/Widgets/Category",
  component: undefined,
} as ComponentMeta<any>;

const categories2: CategoryData[] = [
  {
    name: "Category 1",
    description: "description",
    image: "https://dummyimage.com/200x200/000/6e6e6e.jpg",
  },
  {
    name: "Category 2",
    description: "description",
    image: "https://dummyimage.com/200x200/000/6e6e6e.jpg",
  },
  {
    name: "Category 3",
    description: "description",
    image: "https://dummyimage.com/200x200/000/6e6e6e.jpg",
  },
  {
    name: "Category 4",
    description: "description",
    image: "https://dummyimage.com/200x200/000/6e6e6e.jpg",
  },
];

const categories3: CategoryData[] = [
  {
    name: "Category 1",
    description: "description",
    image: "https://dummyimage.com/200x200/000/6e6e6e.jpg",
  },
  {
    name: "Category 2",
    description: "description",
    image: "https://dummyimage.com/200x200/000/6e6e6e.jpg",
  },
  {
    name: "Category 3",
    description: "description",
    image: "https://dummyimage.com/200x200/000/6e6e6e.jpg",
  },
  {
    name: "Category 4",
    description: "description",
    image: "https://dummyimage.com/200x200/000/6e6e6e.jpg",
  },
  {
    name: "Category 5",
    description: "description",
    image: "https://dummyimage.com/200x200/000/6e6e6e.jpg",
  },
  {
    name: "Category 6",
    description: "description",
    image: "https://dummyimage.com/200x200/000/6e6e6e.jpg",
  },
];

export const GridCols2List: ComponentStory<any> = ({}) => {
  return (
    <>
      <GridCols2CategoryList title="Danh Muc" items={categories2} />
    </>
  );
};

export const GridCols3List: ComponentStory<any> = ({}) => {
  return (
    <>
      <GridCols3CategoryList title="Danh Muc" items={categories3} />
    </>
  );
};
