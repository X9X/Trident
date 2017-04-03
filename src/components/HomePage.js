import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>Trident</h1>
      <h2>Welcome</h2>
      <ol>
        <li>This is a link of <Link to="hello-world">Hello World</Link></li>
        <li>This is a link of <Link to="music-list">Music List</Link></li>
        <li>We stole Poseidon's weapon and used it as a fork in BBQ.</li>
      </ol>
    </div>
  );
};

export default HomePage;
