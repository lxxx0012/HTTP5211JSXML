import React from 'react';
import Nav from './Nav';
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1 className="site-title">
          <a href="/">Alex Yee's Portfolio</a>
        </h1>
      </div>
      <Nav />
    </header>
  );
}
