import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Nav = ({ setSearch, search }) => {
  return (
    <nav className="Nav">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="Search"></label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
