import { useState,useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
const SinglePage = () => {
  //* пример с useParams()
  // имя совпадает с переданным <Route path="posts/:id" ...
  const {id}=useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  },[id]);

  // динамически меняется значение введенное в адрюстроку после posts/
  return <div>{post && (
    <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
    </>
  )}</div>;
}; 

export default SinglePage;
