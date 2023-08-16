import Header from "../component/Header";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className="body container">
        <div className="title-container flex-jcb">
          <div className="title-breadcrumbs">
            <h1 className="title-page">
              {" "}
              <a href="/su-kien.htm">Sự kiện</a>{" "}
            </h1>
          </div>
        </div>
        <div className="grid highlight">
          <div className="article-wrap">
            <article className="article grid">
              <article
                className="article-item"
                data-content-name="category-highlights"
                data-content-piece="category-highlights-position_1"
                data-content-target="/xa-hoi/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi-20220808212642776.htm"
                data-track-content
              >
                <div className="article-thumb">
                  {" "}
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    <img
                      loading="lazy"
                      width={516}
                      height={344}
                      alt='Bộ Công an sẽ bổ sung mục "nơi sinh" vào hộ chiếu mẫu mới'
                      src="https://icdn.dantri.com.vn/zoom/516_344/2022/08/02/ho-chieu-1659447926487.jpg"
                      srcSet="https://icdn.dantri.com.vn/zoom/516_344/2022/08/02/ho-chieu-1659447926487.jpg 1x, https://icdn.dantri.com.vn/zoom/1032_688/2022/08/02/ho-chieu-1659447926487.jpg 2x"
                    />
                  </Link>
                </div>
                <div className="article-content">
                  <h3 className="article-title">
                    {" "}
                    <Link
                      to={
                        "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                      }
                    >
                      Bộ Công an sẽ bổ sung mục "nơi sinh" vào hộ chiếu mẫu mới
                    </Link>
                  </h3>
                  <div className="article-excerpt">
                    {" "}
                    <Link
                      to={
                        "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                      }
                    >
                      Bộ Công an đã thống nhất với Bộ Ngoại giao trước mắt tiến
                      hành bị chú "nơi sinh" vào hộ chiếu mẫu mới cho công dân
                      khi có đề nghị.{" "}
                    </Link>
                  </div>
                </div>
              </article>
              <article
                className="article-item"
                data-content-name="category-highlights"
                data-content-piece="category-highlights-position_2"
                data-content-target="/xa-hoi/tau-ca-chim-8-ngu-dan-troi-dat-tren-bien-20220808201906771.htm"
                data-track-content
              >
                <div className="article-thumb">
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    {" "}
                    <img
                      loading="lazy"
                      width={252}
                      height={168}
                      alt="Tàu cá chìm, 8 ngư dân trôi dạt trên biển"
                      src="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/tau-ca-1659964436613.jpeg"
                      srcSet="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/tau-ca-1659964436613.jpeg 1x, https://icdn.dantri.com.vn/zoom/504_336/2022/08/08/tau-ca-1659964436613.jpeg 2x"
                    />
                  </Link>
                </div>
                <h3 className="article-title">
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    Tàu cá chìm, 8 ngư dân trôi dạt trên biển
                  </Link>
                </h3>
              </article>
              <article
                className="article-item"
                data-content-name="category-highlights"
                data-content-piece="category-highlights-position_3"
                data-content-target="/xa-hoi/hon-vong-phu-noi-tieng-xu-thanh-bi-sat-lo-do-set-danh-20220808202124306.htm"
                data-track-content
              >
                <div className="article-thumb">
                  {" "}
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    <img
                      loading="lazy"
                      width={252}
                      height={168}
                      alt="Hòn Vọng Phu nổi tiếng xứ Thanh bị sạt lở do sét đánh"
                      src="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/z3628387242233487aef52b21db4f0626b71cd255cbbb3-crop-1659964712688.jpeg"
                      srcSet="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/z3628387242233487aef52b21db4f0626b71cd255cbbb3-crop-1659964712688.jpeg 1x, https://icdn.dantri.com.vn/zoom/504_336/2022/08/08/z3628387242233487aef52b21db4f0626b71cd255cbbb3-crop-1659964712688.jpeg 2x"
                    />
                  </Link>
                </div>
                <h3 className="article-title">
                  {" "}
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    Hòn Vọng Phu nổi tiếng xứ Thanh bị sạt lở do sét đánh
                  </Link>
                </h3>
              </article>
            </article>
            <article className="article column">
              <article
                className="article-item"
                data-content-name="category-highlights"
                data-content-piece="category-highlights-position_4"
                data-content-target="/the-gioi/ukraine-tan-cong-tam-xa-vao-can-cu-quan-su-cua-nga-20220808202537595.htm"
                data-track-content
              >
                <div className="article-thumb">
                  {" "}
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    <img
                      loading="lazy"
                      width={186}
                      height={124}
                      alt="Ukraine tấn công tầm xa vào căn cứ quân sự của Nga"
                      src="https://icdn.dantri.com.vn/zoom/186_124/2022/08/08/noreuters-crop-1659965021069.jpeg"
                      srcSet="https://icdn.dantri.com.vn/zoom/186_124/2022/08/08/noreuters-crop-1659965021069.jpeg 1x, https://icdn.dantri.com.vn/zoom/372_248/2022/08/08/noreuters-crop-1659965021069.jpeg 2x"
                    />
                  </Link>
                </div>
                <h3 className="article-title">
                  {" "}
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    Ukraine tấn công tầm xa vào căn cứ quân sự của Nga
                  </Link>
                </h3>
              </article>
              <article
                className="article-item"
                data-content-name="category-highlights"
                data-content-piece="category-highlights-position_5"
                data-content-target="/xa-hoi/xe-container-may-man-boc-chay-ngay-gan-xe-cho-nuoc-20220808195423750.htm"
                data-track-content
              >
                <div className="article-thumb">
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    <img
                      loading="lazy"
                      width={186}
                      height={124}
                      alt='Xe container "may mắn" bốc cháy ngay gần xe chở nước'
                      src="https://icdn.dantri.com.vn/zoom/186_124/2022/08/08/29288899228919702644442888720111335159241434n-1659962521169-crop-1659967615294.jpeg"
                      srcSet="https://icdn.dantri.com.vn/zoom/186_124/2022/08/08/29288899228919702644442888720111335159241434n-1659962521169-crop-1659967615294.jpeg 1x, https://icdn.dantri.com.vn/zoom/372_248/2022/08/08/29288899228919702644442888720111335159241434n-1659962521169-crop-1659967615294.jpeg 2x"
                    />
                  </Link>
                </div>
                <h3 className="article-title">
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    Xe container "may mắn" bốc cháy ngay gần xe chở nước
                  </Link>
                </h3>
              </article>
              <article
                className="article-item"
                data-content-name="category-highlights"
                data-content-piece="category-highlights-position_6"
                data-content-target="/the-gioi/dien-kremlin-neu-kha-nang-tong-thong-nga-ukraine-gap-mat-dam-phan-20220808175756592.htm"
                data-track-content
              >
                <div className="article-thumb">
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    <img
                      loading="lazy"
                      width={186}
                      height={124}
                      alt="Điện Kremlin nêu khả năng Tổng thống Nga - Ukraine gặp mặt đàm phán"
                      src="https://icdn.dantri.com.vn/zoom/186_124/2022/04/01/tongthongputinzelenskygetty-crop-1648787484731.jpeg"
                      srcSet="https://icdn.dantri.com.vn/zoom/186_124/2022/04/01/tongthongputinzelenskygetty-crop-1648787484731.jpeg 1x, https://icdn.dantri.com.vn/zoom/372_248/2022/04/01/tongthongputinzelenskygetty-crop-1648787484731.jpeg 2x"
                    />
                  </Link>
                </div>
                <h3 className="article-title">
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    Điện Kremlin nêu khả năng Tổng thống Nga - Ukraine gặp mặt
                    đàm phán
                  </Link>
                </h3>
              </article>
              <article
                className="article-item"
                data-content-name="category-highlights"
                data-content-piece="category-highlights-position_7"
                data-content-target="/xa-hoi/bo-truong-quoc-phong-phan-van-giang-tiep-dai-tuong-hun-manet-20220808184601243.htm"
                data-track-content
              >
                <div className="article-thumb">
                  {" "}
                  <a href="/xa-hoi/bo-truong-quoc-phong-phan-van-giang-tiep-dai-tuong-hun-manet-20220808184601243.htm">
                    <img
                      loading="lazy"
                      width={186}
                      height={124}
                      alt="Bộ trưởng Quốc phòng Phan Văn Giang tiếp Đại tướng Hun Manet"
                      src="https://icdn.dantri.com.vn/zoom/186_124/2022/08/08/dsc8538-crop-1659961924371.jpeg"
                      srcSet="https://icdn.dantri.com.vn/zoom/186_124/2022/08/08/dsc8538-crop-1659961924371.jpeg 1x, https://icdn.dantri.com.vn/zoom/372_248/2022/08/08/dsc8538-crop-1659961924371.jpeg 2x"
                    />
                  </a>{" "}
                </div>
                <h3 className="article-title">
                  {" "}
                  <a href="/xa-hoi/bo-truong-quoc-phong-phan-van-giang-tiep-dai-tuong-hun-manet-20220808184601243.htm">
                    Bộ trưởng Quốc phòng Phan Văn Giang tiếp Đại tướng Hun Manet
                  </a>{" "}
                </h3>
              </article>
            </article>
          </div>
          <div id="desktop-right-1" className="mdbl" />
        </div>
        <div className="grid list" id="bai-viet">
          <div className="main">
            <div className="article list">
              <article
                className="article-item"
                data-content-name="category-timeline_page_1"
                data-content-piece="category-timeline_page_1-position_1"
                data-content-target="/xa-hoi/hinh-thanh-ap-thap-nhiet-doi-o-bien-dong-co-kha-nang-manh-thanh-bao-20220808181352490.htm"
                data-track-content
              >
                <div className="article-thumb">
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    <img
                      loading="lazy"
                      width={252}
                      height={168}
                      alt="Hình thành áp thấp nhiệt đới ở Biển Đông, có khả năng mạnh thành bão"
                      data-src="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg"
                      data-srcset="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg 1x, https://icdn.dantri.com.vn/zoom/504_336/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg 2x"
                      src="https://icdn.dantri.com.vn/thumb_w/680/2022/08/09/img0820-1660014351865.jpeg"
                    />
                  </Link>
                </div>
                <div className="article-content">
                  <h3 className="article-title">
                    <Link
                      to={
                        "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                      }
                    >
                      Hình thành áp thấp nhiệt đới ở Biển Đông, có khả năng mạnh
                      thành bão
                    </Link>
                  </h3>
                  <div className="article-excerpt">
                    <Link
                      to={
                        "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                      }
                    >
                      Theo Trung tâm Dự báo khí tượng thủy văn Quốc gia, chiều
                      nay (8/8), vùng áp thấp trên khu vực Bắc Biển Đông đã mạnh
                      lên thành áp thấp nhiệt đới.{" "}
                    </Link>
                  </div>
                </div>
              </article>
              <article
                className="article-item"
                data-content-name="category-timeline_page_1"
                data-content-piece="category-timeline_page_1-position_1"
                data-content-target="/xa-hoi/hinh-thanh-ap-thap-nhiet-doi-o-bien-dong-co-kha-nang-manh-thanh-bao-20220808181352490.htm"
                data-track-content
              >
                <div className="article-thumb">
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    <img
                      loading="lazy"
                      width={252}
                      height={168}
                      alt="Hình thành áp thấp nhiệt đới ở Biển Đông, có khả năng mạnh thành bão"
                      data-src="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg"
                      data-srcset="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg 1x, https://icdn.dantri.com.vn/zoom/504_336/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg 2x"
                      src="https://icdn.dantri.com.vn/thumb_w/680/2022/08/09/img0820-1660014351865.jpeg"
                    />
                  </Link>
                </div>
                <div className="article-content">
                  <h3 className="article-title">
                    <Link
                      to={
                        "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                      }
                    >
                      Hình thành áp thấp nhiệt đới ở Biển Đông, có khả năng mạnh
                      thành bão
                    </Link>
                  </h3>
                  <div className="article-excerpt">
                    <Link
                      to={
                        "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                      }
                    >
                      Theo Trung tâm Dự báo khí tượng thủy văn Quốc gia, chiều
                      nay (8/8), vùng áp thấp trên khu vực Bắc Biển Đông đã mạnh
                      lên thành áp thấp nhiệt đới.{" "}
                    </Link>
                  </div>
                </div>
              </article>
              <article
                className="article-item"
                data-content-name="category-timeline_page_1"
                data-content-piece="category-timeline_page_1-position_1"
                data-content-target="/xa-hoi/hinh-thanh-ap-thap-nhiet-doi-o-bien-dong-co-kha-nang-manh-thanh-bao-20220808181352490.htm"
                data-track-content
              >
                <div className="article-thumb">
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    <img
                      loading="lazy"
                      width={252}
                      height={168}
                      alt="Hình thành áp thấp nhiệt đới ở Biển Đông, có khả năng mạnh thành bão"
                      data-src="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg"
                      data-srcset="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg 1x, https://icdn.dantri.com.vn/zoom/504_336/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg 2x"
                      src="https://icdn.dantri.com.vn/thumb_w/680/2022/08/09/img0820-1660014351865.jpeg"
                    />
                  </Link>
                </div>
                <div className="article-content">
                  <h3 className="article-title">
                    <Link
                      to={
                        "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                      }
                    >
                      Hình thành áp thấp nhiệt đới ở Biển Đông, có khả năng mạnh
                      thành bão
                    </Link>
                  </h3>
                  <div className="article-excerpt">
                    <Link
                      to={
                        "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                      }
                    >
                      Theo Trung tâm Dự báo khí tượng thủy văn Quốc gia, chiều
                      nay (8/8), vùng áp thấp trên khu vực Bắc Biển Đông đã mạnh
                      lên thành áp thấp nhiệt đới.{" "}
                    </Link>
                  </div>
                </div>
              </article>
              <article
                className="article-item"
                data-content-name="category-timeline_page_1"
                data-content-piece="category-timeline_page_1-position_1"
                data-content-target="/xa-hoi/hinh-thanh-ap-thap-nhiet-doi-o-bien-dong-co-kha-nang-manh-thanh-bao-20220808181352490.htm"
                data-track-content
              >
                <div className="article-thumb">
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    <img
                      loading="lazy"
                      width={252}
                      height={168}
                      alt="Hình thành áp thấp nhiệt đới ở Biển Đông, có khả năng mạnh thành bão"
                      data-src="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg"
                      data-srcset="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg 1x, https://icdn.dantri.com.vn/zoom/504_336/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg 2x"
                      src="https://icdn.dantri.com.vn/thumb_w/680/2022/08/09/img0820-1660014351865.jpeg"
                    />
                  </Link>
                </div>
                <div className="article-content">
                  <h3 className="article-title">
                    <Link
                      to={
                        "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                      }
                    >
                      Hình thành áp thấp nhiệt đới ở Biển Đông, có khả năng mạnh
                      thành bão
                    </Link>
                  </h3>
                  <div className="article-excerpt">
                    <Link
                      to={
                        "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                      }
                    >
                      Theo Trung tâm Dự báo khí tượng thủy văn Quốc gia, chiều
                      nay (8/8), vùng áp thấp trên khu vực Bắc Biển Đông đã mạnh
                      lên thành áp thấp nhiệt đới.{" "}
                    </Link>
                  </div>
                </div>
              </article>
              <article
                className="article-item"
                data-content-name="category-timeline_page_1"
                data-content-piece="category-timeline_page_1-position_1"
                data-content-target="/xa-hoi/hinh-thanh-ap-thap-nhiet-doi-o-bien-dong-co-kha-nang-manh-thanh-bao-20220808181352490.htm"
                data-track-content
              >
                <div className="article-thumb">
                  <Link
                    to={
                      "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                    }
                  >
                    <img
                      loading="lazy"
                      width={252}
                      height={168}
                      alt="Hình thành áp thấp nhiệt đới ở Biển Đông, có khả năng mạnh thành bão"
                      data-src="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg"
                      data-srcset="https://icdn.dantri.com.vn/zoom/252_168/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg 1x, https://icdn.dantri.com.vn/zoom/504_336/2022/08/08/ap-thap-nhiet-doi-1659956961278.jpeg 2x"
                      src="https://icdn.dantri.com.vn/thumb_w/680/2022/08/09/img0820-1660014351865.jpeg"
                    />
                  </Link>
                </div>
                <div className="article-content">
                  <h3 className="article-title">
                    <Link
                      to={
                        "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                      }
                    >
                      Hình thành áp thấp nhiệt đới ở Biển Đông, có khả năng mạnh
                      thành bão
                    </Link>
                  </h3>
                  <div className="article-excerpt">
                    <Link
                      to={
                        "/read/bo-cong-an-se-bo-sung-muc-noi-sinh-vao-ho-chieu-mau-moi"
                      }
                    >
                      Theo Trung tâm Dự báo khí tượng thủy văn Quốc gia, chiều
                      nay (8/8), vùng áp thấp trên khu vực Bắc Biển Đông đã mạnh
                      lên thành áp thấp nhiệt đới.{" "}
                    </Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="pagination">
              {" "}
              <a
                className="page-item active"
                href="/su-kien.htm"
                rel="nofollow"
              >
                1
              </a>
              <a
                className="page-item"
                href="/su-kien/trang-2.htm"
                rel="nofollow"
              >
                2
              </a>
              <a
                className="page-item"
                href="/su-kien/trang-3.htm"
                rel="nofollow"
              >
                3
              </a>
              <a
                className="page-item"
                href="/su-kien/trang-4.htm"
                rel="nofollow"
              >
                4
              </a>
              <a
                className="page-item"
                href="/su-kien/trang-5.htm"
                rel="nofollow"
              >
                5
              </a>
              <a
                className="page-item next"
                href="/su-kien/trang-2.htm"
                rel="nofollow"
                title="Trang tiếp"
              >
                ❯
              </a>{" "}
            </div>
          </div>
          <div className="sidebar">
            <div id="desktop-right-2" className="mdbl" />
          </div>
        </div>
        <div id="desktop-footer" className="mdbl" />
      </main>

      <Footer />
    </>
  );
};

export default Home;
