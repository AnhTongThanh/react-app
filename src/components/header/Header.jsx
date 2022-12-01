import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to...</span>
        <span className="headerTitleLg">Simple Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://imgs.search.brave.com/YLSKl4fsK4uuH2FRRxVDGPEnfN5iwi8gui-sR5KB4oo/rs:fit:1200:768:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tY1lqUS1XUDNt/NlkvWE90YTBrbFRr/ZUkvQUFBQUFBQUFB/R1kveG9GNHZfRW1Q/Q2tieUhZbUF1X0lr/LWFWV3d2VmhSdFlB/Q0xjQkdBcy9zMTYw/MC9hbmgtZGVwLTNk/LW1lby1kZXAtMDQu/anBn"
        alt=""
      />
    </div>
  );
}
