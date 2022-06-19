import { Route, Routes, Link, Outlet } from 'react-router-dom';

function AboutPage() {
  return (
    <div>
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi
        error delectus recusandae vero ipsa officia tempore voluptates excepturi
        temporibus?
      </p>
      <ul>
        <li><Link to="contacts">Our contacts</Link></li>
        <li><Link to="team">Our team</Link></li>
      </ul>

      {/* <Routes>
        <Route path="contacts" element={<p>Our contacts</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Routes> */}

      {/* ⬆ аналог ⬆ */}
      <Outlet />
    </div>
  );
}

export default AboutPage;
