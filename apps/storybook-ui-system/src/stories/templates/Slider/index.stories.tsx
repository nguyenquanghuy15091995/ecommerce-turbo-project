import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "ui/components/foundation/Typography";

import {
  SimpleSlider,
  SimpleSliderItem
} from "ui/components/templates/Slider/Simple";

export default {
  title: "Yody UI System/Templates/Slider",
  component: undefined,
} as ComponentMeta<any>;

export const Simple: ComponentStory<any> = ({}) => {
  return (
    <>
      <div>
        <SimpleSlider>
          <SimpleSliderItem
            imageProps={{
              src: "https://dummyimage.com/600x400/000/6e6e6e.jpg",
              srcMD: "https://dummyimage.com/800x364/000/6e6e6e.jpg",
              srcXL: "https://dummyimage.com/1440x656/000/6e6e6e.jpg",
              width: 1440,
              height: 656,
              className: "object-cover w-full",
            }}
          >
            <Typography
              htmlElementTag="div"
              className="text-yd-heading-4 font-semibold text-white"
            >
              Slide 1
            </Typography>
          </SimpleSliderItem>
          <SimpleSliderItem
            imageProps={{
              src: "https://dummyimage.com/600x400/000/6e6e6e.jpg",
              srcMD: "https://dummyimage.com/800x364/000/6e6e6e.jpg",
              srcXL: "https://dummyimage.com/1440x656/000/6e6e6e.jpg",
              width: 1440,
              height: 656,
              className: "object-cover w-full",
            }}
          >
            <Typography
              htmlElementTag="div"
              className="text-yd-heading-4 font-semibold text-white"
            >
              Slide 2
            </Typography>
          </SimpleSliderItem>
          <SimpleSliderItem
            imageProps={{
              src: "https://dummyimage.com/600x400/000/6e6e6e.jpg",
              srcMD: "https://dummyimage.com/800x364/000/6e6e6e.jpg",
              srcXL: "https://dummyimage.com/1440x656/000/6e6e6e.jpg",
              width: 1440,
              height: 656,
              className: "object-cover w-full",
            }}
          >
            <Typography
              htmlElementTag="div"
              className="text-yd-heading-4 text-white"
            >
              Slide 3
            </Typography>
          </SimpleSliderItem>
        </SimpleSlider>
      </div>
    </>
  );
};
