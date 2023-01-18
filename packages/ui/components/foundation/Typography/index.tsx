import { FC, useMemo, HTMLAttributes, ReactNode } from "react";

export const HTML_TYPOGRAPHY_TAGS = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "div",
  "span",
] as const;

export type HTMLElementTypographyTag = typeof HTML_TYPOGRAPHY_TAGS[number];

export const TYPOGRAPHY_VARIANTS = [
  // Heading
  "heading-1",
  "heading-2",
  "heading-3",
  "heading-4",
  "heading-5",
  "heading-6",
  "heading-7",
  "heading-8",
  "heading-9",
  // Subtitle
  "subtitle-1",
  "subtitle-2",
  "subtitle-3",
  "subtitle-4",
  "subtitle-5",
  // Body
  "body-1",
  "body-2",
  "body-3",
  // Button Text
  "button-text-1",
  "button-text-2",
  "button-text-3",
  "button-text-4",
  "button-text-5",
  "button-text-6",
  // Label
  "label-1",
  "label-2",
  "label-3",
  "label-4",
  "label-5",
  // Placeholder
  "placeholder-1",
  "placeholder-2",
  // Highlight
  "highlight-1",
  "highlight-2",
  "highlight-3",
  "highlight-4",
  "highlight-5",
  "highlight-6",
] as const;

export type TypographyVariant = typeof TYPOGRAPHY_VARIANTS[number];

export type TypographyFontWeightVariant =
  | "font-regular"
  | "font-medium"
  | "font-semibold"
  | "font-bold"
  | "font-extrabold";

export type TypographyFontSize = string;

export type TypographyFontSizeClassName = {
  [key in TypographyVariant]: TypographyFontSize;
};

export type TypographyFontWeightClassName = {
  [key in TypographyVariant]: TypographyFontWeightVariant;
};

export const DEFAULT_FONT_WEIGHT_CLASSNAMES: TypographyFontWeightClassName = {
  // Heading
  "heading-1": "font-semibold",
  "heading-2": "font-semibold",
  "heading-3": "font-semibold",
  "heading-4": "font-semibold",
  "heading-5": "font-semibold",
  "heading-6": "font-semibold",
  "heading-7": "font-semibold",
  "heading-8": "font-semibold",
  "heading-9": "font-semibold",
  // Subtitle
  "subtitle-1": "font-regular",
  "subtitle-2": "font-regular",
  "subtitle-3": "font-regular",
  "subtitle-4": "font-regular",
  "subtitle-5": "font-regular",
  // Body
  "body-1": "font-regular",
  "body-2": "font-regular",
  "body-3": "font-regular",
  // Button Text
  "button-text-1": "font-semibold",
  "button-text-2": "font-medium",
  "button-text-3": "font-medium",
  "button-text-4": "font-regular",
  "button-text-5": "font-medium",
  "button-text-6": "font-regular",
  // Label
  "label-1": "font-medium",
  "label-2": "font-regular",
  "label-3": "font-medium",
  "label-4": "font-regular",
  "label-5": "font-regular",
  // Placeholder
  "placeholder-1": "font-regular",
  "placeholder-2": "font-regular",
  // Highlight
  "highlight-1": "font-medium",
  "highlight-2": "font-medium",
  "highlight-3": "font-medium",
  "highlight-4": "font-medium",
  "highlight-5": "font-medium",
  "highlight-6": "font-medium",
};

export interface TypographyAttributes {
  htmlElementTag?: HTMLElementTypographyTag;
  isOnlyCustomClassName?: boolean;
}

export interface TypographyProps
  extends HTMLAttributes<HTMLElement>,
    TypographyAttributes {
  children?: ReactNode;
}

const Typography: FC<TypographyProps> = ({
  htmlElementTag = "div",
  children,
  isOnlyCustomClassName,
  className,
  ...props
}) => {
  const ElementTag = useMemo<HTMLElementTypographyTag>(
    () => htmlElementTag || "div",
    [htmlElementTag]
  );

  const getCustomClassName = (): string => {
    return className ? ` ${className}` : "";
  };

  const getDefaultFontWeight = (): string => {
    const variantTemp = TYPOGRAPHY_VARIANTS.find(
      (item) => className && className.includes(`text-yd-${item}`)
    );
    if (variantTemp) {
      return ` ${DEFAULT_FONT_WEIGHT_CLASSNAMES[variantTemp]}`;
    }
    return ` ${DEFAULT_FONT_WEIGHT_CLASSNAMES["body-3"]}`;
  };

  return (
    <>
      <ElementTag
        className={
          isOnlyCustomClassName
            ? getCustomClassName()
            : `${getDefaultFontWeight() + getCustomClassName()}`
        }
        {...props}
      >
        {children}
      </ElementTag>
    </>
  );
};

export default Typography;
