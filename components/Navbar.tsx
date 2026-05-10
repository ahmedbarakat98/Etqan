"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/icon.png";
import Link from "next/link";
import StaggeredMenu from "./StaggeredMenu";
import { usePathname } from 'next/navigation'

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Etqan Academy", ariaLabel: "Etqan Academy", link: "/etqan-academy" },
  { label: "Product", ariaLabel: "Product", link: "/Products" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

const Navbar: React.FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[9999] px-4 pt-4 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-black border-blue-500/20 border-2 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-8 py-5 border-b border-sky-500/10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={150}
              className="w-13"
            />
            {/* </div> */}
            <div>
              <div className="text-sky-300 font-bold tracking-wide">ETQAN</div>
              <div className="text-slate-400 text-xs">Geospatial Solutions</div>
            </div>
          </div>

          {/* Links */}
          <div className="hidden md:flex px-4 items-center gap-8 text-slate-200 text-md font-bold">
            <Link href="/" className={`cursor-pointer ${pathname === '/' ? 'active' : ''} hover:text-sky-300`}>
              Home
            </Link>
            <Link
              href="/etqan-academy"
              className={`cursor-pointer ${pathname === '/etqan-academy' ? 'active' : ''} hover:text-sky-300`}
            >
              ETQAN Academy
            </Link>
            <Link
              href="/Products"
              className={`cursor-pointer ${pathname === '/Products' ? 'active' : ''} hover:text-sky-300`}
            >
              Products
            </Link>
            <Link href="/about" className={`cursor-pointer ${pathname === '/about' ? 'active' : ''} hover:text-sky-300`}>
              About
            </Link>
            <Link
              href="/services"
              className={`cursor-pointer ${pathname === '/services' ? 'active' : ''} hover:text-sky-300`}
            >
              Services
            </Link>
          </div>

          <div style={{ height: "fit-content", background: "#4a4f55" }} className="md:hidden ">
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials
              displayItemNumbering={true}
              menuButtonColor="#ffffff"
              openMenuButtonColor="#000"
              changeMenuColorOnOpen={true}
              colors={["#0ea5e9", "#fFF"]}
              accentColor="#0ea5e9"
              isFixed
              isOpen={isMenuOpen}
              setIsOpen={setIsMenuOpen}
              onMenuOpen={() => setIsMenuOpen(true)}
              onMenuClose={() => setIsMenuOpen(false)}
            />
          </div>

          {/* Button */}
          <Link href="/contact" className="bg-sky-500 hidden md:flex md:text-sm hover:bg-sky-300 text-white font-semibold px-5 py-2.5 rounded-xl transition">
            Get Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
