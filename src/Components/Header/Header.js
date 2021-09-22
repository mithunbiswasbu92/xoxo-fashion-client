import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
            <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>
        </div>
    );
};

export default Header;