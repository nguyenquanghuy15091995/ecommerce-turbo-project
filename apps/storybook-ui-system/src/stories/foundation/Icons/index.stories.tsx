import { ComponentStory, ComponentMeta } from "@storybook/react";

import * as YdIconOutline from "ui/components/foundation/Icons/outline";
import { FC, ReactNode } from "react";

export default {
  title: "Yody UI System/Foundation/Icons",
  component: undefined,
  argTypes: {
    color: {
      control: {
        type: "color",
      },
      name: "Color",
    },
    size: {
      control: {
        type: "number",
      },
      name: "Size",
      defaultValue: 24,
    },
    theme: {
      control: {
        type: "select",
        options: ["light", "dark"],
      },
      name: "Theme",
      defaultValue: "light",
    },
    search: {
      control: {
        type: "text",
      },
      name: "Search",
    },
  },
} as ComponentMeta<any>;

interface IconStoryProps {
  children?: ReactNode;
  name?: string;
  background?: string;
  color?: string;
}

const IconStory: FC<IconStoryProps> = ({
  children,
  name,
  background = "bg-white",
  color,
}) => {
  return (
    <>
      <div
        className={`p-3 shadow-yd-depth-8 flex flex-col items-center rounded ${background}`}
      >
        <div className="pb-2">{children}</div>
        <div className="text-yd-label-3 font-semibold text-center" style={{ color: color }}>
          {name}
        </div>
      </div>
    </>
  );
};

const outlineIcons = [
  {
    Element: YdIconOutline.YdOutlineArrowLeft,
    name: "Arrow Left",
  },
  {
    Element: YdIconOutline.YdOutlineArrowRight,
    name: "Arrow Right",
  },
];

export const Normal: ComponentStory<any> = ({ color, size, theme, search }) => {
  const background = theme === "dark" ? "bg-yd-typo-title" : "bg-white";
  const iconProps = {
    color: color,
    size: size,
  };

  const isMatchedSearchText = (name: string): boolean => {
    const searchText = typeof search === "string" ? search.toLowerCase() : "";
    if (searchText === "") {
      return true;
    }
    return name.toLowerCase().includes(searchText);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="pb-5 pt-7">
          <div className="font-bold text-yd-heading-4 text-yd-typo-label">
            Outline
          </div>
        </div>
        <div className="grid gap-3 md:gap-4 xl:gap-3 grid-cols-4 md:grid-cols-6 xl:grid-cols-8">
          {outlineIcons
            .filter((item) => isMatchedSearchText(item.name))
            .map((item, itemIdx) => (
              <IconStory
                key={itemIdx}
                name={item.name}
                background={background}
                color={color}
              >
                <item.Element {...iconProps} />
              </IconStory>
            ))}
        </div>
      </div>
    </>
  );
};
