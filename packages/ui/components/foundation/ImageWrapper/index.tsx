import { FC, HTMLAttributes, ImgHTMLAttributes } from "react";

export interface ImageWrapperProps extends ImgHTMLAttributes<HTMLImageElement> {
  pictureProps?: HTMLAttributes<{}>;
  breakpointXL?: string;
  breakpointMD?: string;
  breakpointSM?: string;
  srcXL?: string;
  srcMD?: string;
  srcSM?: string;
  // isLoading
}

const ImageWrapper: FC<ImageWrapperProps> = ({
  pictureProps,
  breakpointXL = "1440px",
  breakpointMD = "768px",
  breakpointSM = "428px",
  srcXL,
  srcMD,
  srcSM,
  src,
  loading = "lazy",
  ...props
}) => {
  const finalSrc = srcSM || src;
  return (
    <>
      <div className="relative">
        <picture className="relative z-10" {...pictureProps}>
          {srcXL && (
            <source media={`(min-width:${breakpointXL})`} srcSet={srcXL} />
          )}
          {srcMD && (
            <source media={`(min-width:${breakpointMD})`} srcSet={srcMD} />
          )}
          {srcSM && (
            <source media={`(min-width:${breakpointSM})`} srcSet={srcSM} />
          )}
          <img loading={loading} src={finalSrc} alt="yody image" {...props} />
        </picture>
      </div>
    </>
  );
};

export default ImageWrapper;
