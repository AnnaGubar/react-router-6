import { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


function BlogPage(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  },[]);

  const location=useLocation(); 

  return (
    <div>
      <h1>Our news</h1>
      <Link to="/posts/new">Add new post</Link>

      {posts.map(post=>(
        // при клике на ссылку переходим на страничку с id поста
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      )
        )}
    </div>
  );

}

export default BlogPage;