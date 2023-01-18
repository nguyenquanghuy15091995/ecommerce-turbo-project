import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Yody UI System/Foundation/Grid Layout",
  component: undefined,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<any>;

const Cell = () => {
  return (
    <div className="rounded h-12 opacity-20" style={{ backgroundColor: "#FF4E4E" }} />
  );
};

const Template: ComponentStory<any> = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid gap-3 md:gap-4 xl:gap-3 grid-cols-4 md:grid-cols-6 xl:grid-cols-24">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    </>
  );
};

export const Normal = Template.bind({});
