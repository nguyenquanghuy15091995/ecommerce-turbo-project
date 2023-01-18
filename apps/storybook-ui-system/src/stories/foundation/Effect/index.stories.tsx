import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Yody UI System/Foundation/Effect",
  component: undefined,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<any>;

const BoxShadowTemplate: ComponentStory<any> = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 px-4 md:px-0">
          <div className="shadow-yd-depth-4 p-3 rounded">
            <div className="font-bold mb-2">Depth 4</div>
            <div>Cards</div>
            <div>Grid item</div>
            <div>Thumbnails</div>
          </div>
          <div className="shadow-yd-depth-8 p-3 rounded">
            <div className="font-bold mb-2">Depth 8</div>
            <div>Command</div>
            <div>Bars / Dropdown</div>
            <div>Context menus</div>
          </div>
          <div className="shadow-yd-depth-16 p-3 rounded">
            <div className="font-bold mb-2">Depth 16</div>
            <div>Teaching callouts</div>
            <div>Hover cards / Tooltip</div>
          </div>
          <div className="shadow-yd-depth-64 p-3 rounded">
            <div className="font-bold mb-2">Depth 64</div>
            <div>Panels</div>
            <div>Pop up / Dialogs</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const BoxShadow = BoxShadowTemplate.bind({});
