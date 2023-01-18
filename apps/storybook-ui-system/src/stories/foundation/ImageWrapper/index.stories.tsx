import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageWrapper from "ui/components/foundation/ImageWrapper";

export default {
  title: "Yody UI System/Foundation/Image Wrapper",
  component: undefined,
} as ComponentMeta<any>;

const Template: ComponentStory<any> = ({ }) => {
  return <>
    <div className="container mx-auto">
      <ImageWrapper
        src="https://dummyimage.com/600x400/000/fff.jpg"
        srcMD="https://dummyimage.com/800x500/000/fff.jpg"
        srcXL="https://dummyimage.com/1000x500/000/fff.jpg"
        width={600}
        height={400}
        className="object-cover w-full"
      />
    </div>
  </>;
};

export const Normal = Template.bind({});
