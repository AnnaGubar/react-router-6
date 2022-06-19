import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const CreatePost = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Create some post</h1>
      <button onClick={() => signOut(() => navigate('/', { replace: true }))}>
        Log out
      </button>
    </div>
  );
};

export default CreatePost;
