import {
  FC,
  ReactNode,
  Children,
  useMemo,
  HTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import { Swiper, SwiperSlide, SwiperProps, useSwiper } from "swiper/react";
import { Pagination } from "swiper";
import ImageWrapper, {
  ImageWrapperProps,
} from "ui/components/foundation/ImageWrapper";
import Typography from "ui/components/foundation/Typography";
import {
  YdOutlineArrowLeft,
  YdOutlineArrowRight,
} from "ui/components/foundation/Icons/outline";

export interface SimpleSliderProps extends SwiperProps {
  children?: ReactNode;
}

export interface SimpleSliderItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  imageProps?: ImageWrapperProps;
}

export interface NavSliderButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const SimpleSliderItem: FC<SimpleSliderItemProps> = ({
  children,
  imageProps,
  ...props
}) => {
  return (
    <div className="relative" {...props}>
      {imageProps && (
        <div>
          <ImageWrapper {...imageProps} />
        </div>
      )}
      <div className="absolute z-10 top-0 left-0 w-full h-full">
        <div className="container h-full mx-auto">
          <div className="grid h-full gap-3 md:gap-4 grid-cols-4 md:grid-cols-6 xl:grid-cols-12">
            <div className="hidden xl:block" />
            <div className="col-span-full md:col-span-6 xl:col-span-4 flex items-center">
              <div className="w-full">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrevButton: FC<NavSliderButton> = ({ children, ...props }) => {
  const swiper = useSwiper();
  return (
    <button
      {...props}
      className="flex opacity-75 hover:opacity-100"
      onClick={() => swiper.slidePrev()}
    >
      {children}
    </button>
  );
};

const NextButton: FC<NavSliderButton> = ({ children, ...props }) => {
  const swiper = useSwiper();
  return (
    <button
      {...props}
      className="flex opacity-75 hover:opacity-100"
      onClick={() => swiper.slideNext()}
    >
      {children}
    </button>
  );
};

export const SimpleSlider: FC<SimpleSliderProps> = ({
  children,
  initialSlide = 1,
  loop = true,
  ...props
}) => {
  const nodeList = useMemo<ReactNode[]>(
    () => Children.toArray(children),
    [children]
  );
  return (
    <>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          bulletClass: "simple-swiper-pagination-bullet",
          bulletActiveClass: "simple-swiper-pagination-bullet-active",
          modifierClass: "simple-swiper-pagination-",
          horizontalClass: "simple-swiper-pagination-horizontal",
        }}
        loop={loop}
        initialSlide={initialSlide}
        {...props}
      >
        {nodeList.map((item, itemIdx) => (
          <SwiperSlide key={itemIdx}>{item}</SwiperSlide>
        ))}
        <div className="absolute pb-6 z-10 left-0 w-full bottom-0">
          <div className="container mx-auto flex items-center justify-between">
            <PrevButton>
              <div className="pr-5">
                <YdOutlineArrowLeft className="text-white" size={20} />
              </div>
              <Typography
                htmlElementTag="div"
                className="text-yd-heading-8 uppercase text-white"
              >
                Trước
              </Typography>
            </PrevButton>
            <NextButton>
              <Typography
                htmlElementTag="div"
                className="text-yd-heading-8 uppercase text-white"
              >
                Tiếp
              </Typography>
              <div className="pl-5">
                <YdOutlineArrowRight className="text-white" size={20} />
              </div>
            </NextButton>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default SimpleSlider;
