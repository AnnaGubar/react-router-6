import {Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SinglePage from './pages/SinglePage';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import s from 'App.css';

export const App = () => {
  return (
    <>
      {/* Layout - как общая обертка для дочерних компонентов */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="posts/new" element={<CreatePost />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
