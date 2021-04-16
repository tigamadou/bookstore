import React from 'react';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="navbar">
        <div className="navbar_left">
          <h1 className="navbar_title">Bookstore CMS</h1>
          <nav className="navbar_nav">
            <ul className="navbar_nav_menu">
              <li><a href="/" className="navbar_nav_menu_link active">Books</a></li>
              <li><a href="/" className="navbar_nav_menu_link">Categories</a></li>
            </ul>

          </nav>
        </div>
        <div className="navbar_right">
          <div className="header_user">
            User
          </div>
        </div>
      </div>
    </div>

  </header>
);

export default Header;
