import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
const SinglePage = () => {
  //* useParams()
  // имя совпадает с переданным <Route path="posts/:id" ...
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  //* useNavigate()
  const navigate = useNavigate();

  // navigate(-1) - возвр. на страницу назад,
  // navigate(1) - переходит на страницу вперед,
  const goBack = () => navigate(-1); // движение по истории
  const goHome= () => navigate('/',{replace:true}); // движение по ссылке

   //*--------------------------
  // динамически меняется значение введенное в адрюстроку после posts/
  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go Home</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};

export default SinglePage;
