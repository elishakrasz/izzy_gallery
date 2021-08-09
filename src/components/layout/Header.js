import React from 'react';
import { Link } from 'gatsby'

import Button from '../Button';
import LogoIconUri from '../LogoIconUri';
import LogoWild from '../LogoWild';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="flex container flex-col sm:flex-row justify-between items-center mx-auto pt-4 pb-5 px-8">
      <div className="flex items-center text-lg">
        <div className="w-20 mr-8">
          <LogoIconUri />
        </div>
        <scan className="">Izzy Pludwinski ~ Hebrew Calligraphy</scan>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" href="#features">
         Ketubot
        </Link>
        <Link className="px-4" href="#services">
          Gift Ideas
        </Link>
        <Link className="px-4" href="#stats">
          Galleries
        </Link>
        <Link className="px-4" href="#testimonials">
          Exhibitions
        </Link>
        <Link className="px-4" href="#testimonials">
          Books/Hebrew Calligraphy Course
        </Link>
      </div>
      <div style={{
        width:'52px'
      }} className="hidden md:block">
        <LogoWild />
        {/* <Button className="text-sm text-gray-700">Start Free Trial</Button> */}
      </div>
    </div>
  </header>
);

export default Header;
