import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography, {
  HTML_TYPOGRAPHY_TAGS,
  TYPOGRAPHY_VARIANTS,
} from "ui/components/foundation/Typography";

export default {
  title: "Yody UI System/Foundation/Typography",
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isOnlyCustomClassName: {
      control: {
        disable: true,
      },
    },
    htmlElementTag: {
      control: {
        options: HTML_TYPOGRAPHY_TAGS,
        type: "select",
      },
      name: "HTML Element Tag",
      defaultValue: HTML_TYPOGRAPHY_TAGS[0],
    },
    variant: {
      control: {
        options: TYPOGRAPHY_VARIANTS,
        type: "select",
      },
      name: "Variant",
      defaultValue: TYPOGRAPHY_VARIANTS[0],
    },
    fontStyle: {
      control: {
        options: ["normal", "italic"],
        type: "select",
      },
      name: "Font Style",
      defaultValue: "normal",
    },
    content: {
      control: {
        type: "text",
      },
      name: "Content",
      defaultValue: "Typography",
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<any> = ({
  // isOnlyCustomClassName,
  variant,
  content,
  fontStyle,
  className,
  ...props
}) => {
  return (
    <>
      {/* Heading */}
      <div className="text-yd-heading-1" />
      <div className="text-yd-heading-2" />
      <div className="text-yd-heading-3" />
      <div className="text-yd-heading-4" />
      <div className="text-yd-heading-5" />
      <div className="text-yd-heading-6" />
      <div className="text-yd-heading-7" />
      <div className="text-yd-heading-8" />
      <div className="text-yd-heading-9" />
      {/* Subtitle */}
      <div className="text-yd-subtitle-1" />
      <div className="text-yd-subtitle-2" />
      <div className="text-yd-subtitle-3" />
      <div className="text-yd-subtitle-4" />
      <div className="text-yd-subtitle-5" />
      {/* Body */}
      <div className="text-yd-body-1" />
      <div className="text-yd-body-2" />
      <div className="text-yd-body-3" />
      {/* Button Text */}
      <div className="text-yd-button-text-1" />
      <div className="text-yd-button-text-2" />
      <div className="text-yd-button-text-3" />
      <div className="text-yd-button-text-4" />
      <div className="text-yd-button-text-5" />
      <div className="text-yd-button-text-6" />
      {/* Label */}
      <div className="text-yd-label-1" />
      <div className="text-yd-label-2" />
      <div className="text-yd-label-3" />
      <div className="text-yd-label-4" />
      <div className="text-yd-label-5" />
      {/* Placeholder */}
      <div className="text-yd-placeholder-1" />
      <div className="text-yd-placeholder-2" />
      {/* Highlight */}
      <div className="text-yd-highlight-1" />
      <div className="text-yd-highlight-2" />
      <div className="text-yd-highlight-3" />
      <div className="text-yd-highlight-4" />
      <div className="text-yd-highlight-5" />
      <div className="text-yd-highlight-6" />
      <div className="container mx-auto">
        <Typography
          {...props}
          variant={variant}
          className={`${fontStyle}${className ? ` ${className}` : ""}`}
        >
          {content}
        </Typography>
      </div>
    </>
  );
};

export const Normal = Template.bind({});
