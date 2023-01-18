import Typography from "ui/components/foundation/Typography";
import ImageWrapper from "ui/components/foundation/ImageWrapper";
import ImgPhone from "./assets/img/Phone.png";
import ImgMail from "./assets/img/Mail.png";
import ImgMessage from "./assets/img/Message.png";
import ImageFace from "./assets/img/Vector.png";
import ImageCammera from "./assets/img/camera.png";
import ImageZalo from "./assets/img/zalo.png";
import ImageYotube from "./assets/img/youtube.png";
import ImageFt1 from "./assets/img/ft1.png";
import ImageFt2 from "./assets/img/ft2.png";

const Footer = () => {
  return (
    <>
      <div className="footer" style={{ backgroundColor: "#717171" }}>
        <div className="footer-top pt-9 ">
          <div className="grid gap-12 md:gap-12 xl:gap-12 grid-cols-4 md:grid-cols-4 xl:grid-cols-4 ">
            <div className="container">
              <ul>
                <Typography />
                <li className="text-yd-grey-light-1">Khám phá YODY</li>
                <li className="text-yd-grey-light-1">Áo phao</li>
                <li className="text-yd-grey-light-1">Áo gió</li>
                <li className="text-yd-grey-light-1">Áo giữ nhiệt</li>
                <li className="text-yd-grey-light-1">Bộ đồ thu đông</li>
                <li className="text-yd-grey-light-1">Quần jeans</li>
                <li className="text-yd-grey-light-1">Quần lót</li>
              </ul>
            </div>
            <div className="container">
              <ul>
                <li className="text-yd-grey-light-1">Dịch vụ khách hàng</li>
                <li className="text-yd-grey-light-1">
                  Chính sách khách hàng thân thiết
                </li>
                <li className="text-yd-grey-light-1">Chính sách đổi trả</li>
                <li className="text-yd-grey-light-1">Chính sách bảo mật</li>
                <li className="text-yd-grey-light-1">
                  Chính sách thanh toán, giao nhận
                </li>
                <li className="text-yd-grey-light-1">
                  CHính sách đơn đồng phụ
                </li>
                <li className="text-yd-grey-light-1">Liên hệ</li>
              </ul>
            </div>
            <div className="container">
              <ul>
                <li className="text-yd-grey-light-1 text-yd-heading-8">
                  Về YODY
                </li>
                <li className="text-yd-grey-light-1">Giới thiệu</li>
                <li className="text-yd-grey-light-1">Tuyển dụng</li>
                <li className="text-yd-grey-light-1">Tin tức</li>
                <li className="text-yd-grey-light-1">Hệ thống cửa hàng</li>
                <li className="text-yd-grey-light-1">Địa chỉ liên hệ</li>
                <li className="text-yd-grey-light-1">
                  Địa chỉ: Đường An Định - Phường Việt Hoà - Thành phố Hải dương{" "}
                </li>
              </ul>
            </div>
            <div className="container">
              <ul>
                <li className="text-yd-heading-6 text-yd-grey-light-1">
                  YODY lắng nghe bạn
                </li>
                <li>
                  <Typography
                    htmlElementTag="p"
                    className="text-yd-grey-light-1"
                  >
                    {" "}
                    Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến
                    đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch
                    vụ và sản phẩm tốt hơn nữa.
                  </Typography>
                </li>
                <li className="mt-4">
                  <button className="bg-yd-primary-sub pt-2 pb-2 px-10 rounded-3xl">
                    Gửi ý kiến
                  </button>
                </li>
                <li className="mt-4">
                  <Typography
                    htmlElementTag="div"
                    className="flex"
                    style={{ alignItems: "center", gap: 10 }}
                  >
                    <ImageWrapper src={ImgPhone.src} alt="phone" />
                    <Typography htmlElementTag="div">
                      <Typography
                        htmlElementTag="p"
                        className="text-yd-grey-light-1"
                      >
                        Hỗ trợ đơn hàng
                      </Typography>
                      <Typography
                        htmlElementTag="p"
                        className="text-yd-grey-light-1"
                      >
                        024 9996 6868
                      </Typography>
                    </Typography>
                  </Typography>
                </li>
                <li className="mt-2">
                  <Typography
                    htmlElementTag="div"
                    className="flex"
                    style={{ alignItems: "center", gap: 10 }}
                  >
                    <ImageWrapper src={ImgMail.src} alt="message" />
                    <Typography htmlElementTag="div">
                      <Typography
                        htmlElementTag="p"
                        className="text-yd-grey-light-1"
                      >
                        Góp ý khiếu nại
                      </Typography>
                      <Typography
                        htmlElementTag="p"
                        className="text-yd-grey-light-1"
                      >
                        18002086
                      </Typography>
                    </Typography>
                  </Typography>
                </li>
                <li>
                  <Typography
                    htmlElementTag="div"
                    className="flex"
                    style={{ alignItems: "center", gap: 10 }}
                  >
                    <ImageWrapper src={ImgMessage.src} alt="message" />
                    <Typography htmlElementTag="div">
                      <Typography
                        htmlElementTag="p"
                        className="text-yd-grey-light-1"
                      >
                        Email
                      </Typography>
                      <Typography
                        htmlElementTag="p"
                        className="text-yd-grey-light-1"
                      >
                        chamsockhachhang@yody.vn
                      </Typography>
                    </Typography>
                  </Typography>
                </li>
                <li className="mt-4">
                  <Typography htmlElementTag="div" className="flex gap-3">
                    <Typography htmlElementTag="span">
                      <ImageWrapper src={ImageFace.src} alt="face" />
                    </Typography>
                    <Typography htmlElementTag="span">
                      <ImageWrapper src={ImageCammera.src} alt="camera" />
                    </Typography>
                    <Typography htmlElementTag="span">
                      <ImageWrapper src={ImageZalo.src} alt="zalo" />
                    </Typography>
                    <Typography htmlElementTag="span">
                      <ImageWrapper src={ImageYotube.src} alt="yotube" />
                    </Typography>
                  </Typography>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-4 mt-4 flex">
          <Typography htmlElementTag="div" className="flex-1 ml-16">
            <Typography htmlElementTag="p" className="text-yd-grey-light-1">
              @ CÔNG TY CỔ PHẦN THỜI TRANG YODY
            </Typography>
            <Typography htmlElementTag="p" className="text-yd-grey-light-1">
              Mã số doanh nghiệp: 0801206940. Giấy chứng nhận đăng kí doanh
              nghiệp do Sở Kế hoạch và Đầu tư TP Hải Dương cấp lần đầu ngày
              xx/xx/xxxx.
            </Typography>
          </Typography>
          <Typography
            htmlElementTag="div"
            className="flex gap-5 flex-1"
            style={{ justifyContent: "center" }}
          >
            <ImageWrapper src={ImageFt1.src} alt="Ft1" />
            <ImageWrapper src={ImageFt2.src} alt="Ft1" />
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Footer;
