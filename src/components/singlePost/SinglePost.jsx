import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://imgs.search.brave.com/sLhYnsXc_pZD1u9bVwfogKMrgOMBOCljAJM3RUl4di8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGFy/dHVhbml0Lm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/NS9oaW5oLW5lbi1t/ZW8taG9hLWJlbmdh/bC1jYXQtY2hvLW1h/eS10aW5oLTIuanBn"
          alt=""
          className="singPostImg"
        />
        <h1 className="singlePostTitle">
          MEME MEWMEW
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Wekipedia</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>
          Mèo nhà được Carolus Linnaeus đặt tên là Felis catus trong cuốn
          Systema Naturae xuất bản năm 1758 của ông. Johann Christian Daniel von
          Schreber đặt tên mèo rừng là Felis silvestris năm 1775. Hiện nay mèo
          nhà được coi là một phụ loài của mèo rừng: vì thế theo quy định ưu
          tiên chặt chẽ của Quy tắc đặt tên động vật quốc tế tên của loài này
          phải là F. catus bởi vì sách của Linnaeus được xuất bản trước. Tuy
          nhiên, trên thực tế hầu như mọi nhà nghiên cứu sinh vật học sử dụng F.
          silvestris cho các loài hoang dã, dùng F. catus cho riêng các loài đã
          thuần hoá.
        </p>
      </div>
    </div>
  );
}
