import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import BlogFilter from '../components/BlogFilter'

function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  //* useSearchParams -------------------
  const [searchParams, setSearchParams] = useSearchParams([]);

  const postQuery = searchParams.get('post') || '';
  //URL/posts?post=abc&data=...
  const latest = searchParams.has('latest'); // метод буль

  const startsFrom = latest ? 80 : 1;

  return (
    <div>
      <h1>Our news</h1>

      <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />

      <Link to="/posts/new" style={{margin: '1rem 0', display: 'inline-block'}}>Add new post</Link>

      {posts
        .filter(post => post.title.includes(postQuery)&& post.id>=startsFrom)
        .map(post => (
          // при клике на ссылку переходим на страничку с id поста
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
    </div>
  );
}

export default BlogPage;
