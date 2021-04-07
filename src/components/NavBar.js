import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className='bg-gray-200'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex mx-auto'>
          <NavLink
            to='/'
            exact
            className='inflex-flex items-center text-black text-4xl font-bold tracking-wideest'
          >
            Recipes
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
