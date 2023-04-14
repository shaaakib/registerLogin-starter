import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="">
      <div className="navbar bg-base-100 py-4 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="gap-10 text-2xl menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="register">Register</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold ">
            RegisterLogin
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-2xl gap-10 menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="register">Register</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="py-3 px-5 text-xl font-semibold text-gray-600 rounded-lg bg-gray-100">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}
