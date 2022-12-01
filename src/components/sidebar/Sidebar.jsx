import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitles">About Me</span>
        <img
          src="https://imgs.search.brave.com/YXUSBFg_eyG_PJzns6TlLgezRrDXPtRZp40anx8vJ6s/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly9hbmhu/ZW5kZXAubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzAy/L2hpbmgtbmVuLW1l/by1kZXAtMDcuanBn"
          alt=""
        />
        <p>
          Mèo (chính xác hơn là loài mèo nhà để phân biệt với các loài trong họ
          Mèo khác) là động vật có vú, nhỏ nhắn và chuyên ăn thịt, sống chung
          với loài người, được nuôi để săn vật gây hại hoặc làm thú nuôi cùng
          với chó nhà. Mèo nhà đã sống gần gũi với loài người ít nhất 9.500 năm,
          và hiện nay chúng là con vật cưng phổ biến nhất trên thế giới. Mèo
          giao tiếp bằng cách kêu meo meo, gừ-gừ, rít, gầm gừ và ngôn ngữ cơ
          thể. Mèo trong các bầy đàn sử dụng cả âm thanh lẫn ngôn ngữ cơ thể để
          giao tiếp với nhau.
        </p>
      </div>
      <div className="sidebarItems">
        <span className="sidebarTitles">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarList">Mèo</li>
          <li className="sidebarList">Phân loại khoa học</li>
          <li className="sidebarList">Đặc điểm</li>
          <li className="sidebarList">Lịch sử và thần thoại</li>
          <li className="sidebarList">Miêu tả trong nghệ thuật</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitles">Follow me</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
