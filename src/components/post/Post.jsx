import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://imgs.search.brave.com/wzhiGwVdnJ68s14aCqe90UGZE0hBJQvO6ItKBTPh_Ds/rs:fit:800:533:1/g:ce/aHR0cHM6Ly9zdWRv/c3BhY2VzLmNvbS9o/YXBweXZldC1jb20t/dm4vMjAyMC8wNC90/cmlldC1zYW4tbWVv/LWNhaS0xLmpwZw"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Mew mew mew mew mew mew mew mew mew</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Giống như một số động vật đã thuần hóa khác (như ngựa), mèo vẫn có thể
        sống tốt trong môi trường sống hoang dã như mèo hoang. Trái với quan
        niệm thông thường của mọi người rằng mèo là loài động vật cô độc, chúng
        thường tạo nên các đàn nhỏ trong môi trường sống hoang dã.
      </p>
    </div>
  );
}
