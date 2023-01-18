import ImageWrapper from "ui/components/foundation/ImageWrapper";
import ImageSrcPng from "./Header.png";
import ImageSrc from "./header1.jpg";

const Header = () => {
  return (
    <>
      <div>
        <ImageWrapper src={ImageSrc.src} alt="header1" className="w-full" />
        <ImageWrapper src={ImageSrcPng.src} alt="header2" className="w-full" />
      </div>
    </>
  );
};

export default Header;
