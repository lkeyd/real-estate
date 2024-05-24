"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navlinks = [
  { display: "Buy", route: "buy" },
  { display: "Rent", route: "rent" },
  { display: "Sell", route: "sell" },
  { display: "Our agents", route: "agents" },
];

const Logo = () => {
  return (
    <div className="flex items-center scale-75 md:scale-100 space-x-4 md:space-x-2">
      <Link href="/">
        <Image
          src="/images/icon.svg"
          alt="House icon"
          width={64}
          height={64}
          className="text-gray-800 fill-gray-800 stroke-gray-800"
        ></Image>
      </Link>
      <Link href="/" className="text-3xl text-gray-800 font-bold text-nowrap">
        Prime Property
      </Link>
    </div>
  );
};

const NavLinks = () => {
  return (
    <div className="items-center hidden md:flex">
      {navlinks.map((entry, i) => {
        return <NavLink key={i} route={entry.route} display={entry.display} />;
      })}
    </div>
  );
};

const Login = () => {
  return (
    <div className="flex justify-end space-x-4 items-center">
      <NavLink display="Sign in" route="/"></NavLink>
      <button className="px-6 py-2 bg-red-800 rounded-xl hidden md:flex hover:bg-red-700  transition-colors duration-200 ease-in-out">
        Join
      </button>
    </div>
  );
};

const MenuButton = (props) => {
  return (
    <div className="flex items-center md:hidden relative">
      <button onClick={props.handleMenuClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="none"
          className="text-black"
          stroke="currentColor"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

const FlyOutMenu = (props) => {
  return (
    <div
      className={`absolute z-50 h-full pr-16 top-20 right-full text-nowrap shadow-lg transition-all duration-200 transform ${
        props.menuOpen ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <ul className="h-full flex flex-col bg-white pt-4 pr-12 pl-3">
        {navlinks.map((entry, i) => (
          <NavLink key={i} route={entry.route} display={entry.display} handleClick={props.handleMenuClick} />
        ))}
      </ul>
    </div>
  );
};

const NavLink = (props) => {
  return (
    <div className="flex flex-col items-center group w-min px-2 py-2 rounded-lg">
      <Link
        href={`/${props.route}`}
        className="text-gray-800 text-lg lg:text-xl text-nowrap"
        onClick={props.handleClick}
      >
        {props.display}
      </Link>
      <span className="w-0 h-[2px] group-hover:w-full bg-red-800 duration-300 rounded-md"></span>
    </div>
  );
};

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Close the menu when the screen width is greater than or equal to 768px
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Run only once on component mount

  return (
    <nav className="flex h-16 justify-center bg-white">
      <div className="w-full max-w-7xl flex justify-between px-4">
        <MenuButton handleMenuClick={handleMenuClick}></MenuButton>
        <Logo></Logo>
        <NavLinks></NavLinks>
        <Login></Login>
      </div>
      <FlyOutMenu
        menuOpen={menuOpen}
        handleMenuClick={handleMenuClick}
      ></FlyOutMenu>
    </nav>
  );
}
