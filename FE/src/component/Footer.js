const Footer = () => {
  return (
    <footer className="footer container bg-wrap">
      <div className="footer-logo flex-jcc">
        {" "}
        <a href="/">
          {" "}
          <img
            loading="lazy"
            width={102}
            height={25}
            alt="Báo điện tử Dân trí - Tin tức cập nhật liên tục 24/7"
            src="https://cdnweb.dantri.com.vn/dist/static-logo.1-0-1.329fb29fe0ea34cca545.svg"
          />{" "}
        </a>{" "}
      </div>
      <div className="footer-wrap">
        <div className="footer-col footer-one">
          <ul className="footer-list">
            <li>
              Cơ quan của <b>Bộ Lao động - Thương binh và Xã hội</b>
            </li>
            <li>
              Tổng biên tập: <b>Phạm Tuấn Anh</b>
            </li>
            <li>
              Giấy phép hoạt động báo điện tử Dân trí số 298/GP - BTTTT Hà Nội,
              ngày 15-07-2020.
            </li>
            <li>
              Địa chỉ tòa soạn:{" "}
              <b>Nhà 48, ngõ 2 Giảng Võ, Cát Linh, Đống Đa, Hà Nội</b>
            </li>
            <li>
              Văn phòng đại diện miền Nam:{" "}
              <b>51 Võ Văn Tần, Phường Võ Thị Sáu, Quận 3, TP.HCM</b>
            </li>
            <li>
              Điện thoại: <a href="tel:02437366491">024-3736-6491</a>. Fax:{" "}
              <a href="tel:02437366491">024-3736-6491</a>
            </li>
            <li>
              Hotline HN: <a href="tel:0973567567">0973-567-567</a>. Hotline TP
              HCM: <a href="tel:0973567567">0974-567-567</a>
            </li>
            <li>
              Email: <a href="mailto:info@dantri.com.vn">info@dantri.com.vn</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-two">
          <ul className="footer-list">
            <li>
              Liên hệ quảng cáo: <a href="tel:0945540303">0945.54.03.03</a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:quangcao@dantri.com.vn">quangcao@dantri.com.vn</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-three">
          <div className="footer-app">
            {" "}
            <label className="footer-app-label">
              Đọc báo <b>Dân trí</b> trên mobile:
            </label>
            <div className="footer-app-ico flex-jcc">
              {" "}
              <a
                className="ios"
                target="_blank"
                rel="nofollow"
                href="https://apps.apple.com/vn/app/b%C3%A1o-d%C3%A2n-tr%C3%AD-dantri-com-vn/id1455334618?l=vi"
              >
                IOS
              </a>
              <a
                className="android"
                target="_blank"
                rel="nofollow"
                href="https://play.google.com/store/apps/details?id=vn.com.dantrinews.android"
              >
                Android
              </a>
            </div>
          </div>
          <div className="social flex-jcc">
            {" "}
            <label className="social-label">Theo dõi Dân trí trên:</label>
            <div className="social-list flex-jcc">
              {" "}
              <a
                className="facebook"
                target="_blank"
                rel="nofollow"
                href="https://www.facebook.com/baodantridientu"
              >
                Facebook
              </a>{" "}
              <a
                className="youtube"
                target="_blank"
                rel="nofollow"
                href="https://www.youtube.com/channel/UC4t5NcR9V40MB7rQru8AUew"
              >
                Youtube
              </a>{" "}
              <a
                className="tiktok"
                target="_blank"
                rel="nofollow"
                href="https://www.tiktok.com/@dantri.com.vn"
              >
                Tiktok
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2005-2022 Bản quyền thuộc về Báo điện tử Dân trí. Cấm sao chép dưới
        mọi hình thức nếu không có sự chấp thuận bằng văn bản.
      </div>
    </footer>
  );
};

export default Footer;
