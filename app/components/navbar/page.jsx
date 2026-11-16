"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about-me" },
  { label: "Contact", href: "/contact-us" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/mr_pallu_1250/",
    icon: <FaInstagram />,
  },
  {
    href: "https://www.linkedin.com/in/pervaiz1250/",
    icon: <FaLinkedin />,
  },
  { href: "https://github.com/pervaizdev", icon: <FaGithub /> },
  { href: "https://wa.me/+923431157074", icon: <FaWhatsapp /> },
];

const isActive = (pathname, href) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

const linkClass = (pathname, href) =>
  `transition-colors duration-150 hover:text-cyan-300 ${
    isActive(pathname, href) ? "active" : ""
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014]/90 w-full z-50 text-white">
      <div className="flex justify-between items-center py-3 px-6 lg:px-12">
        <Link href="/" prefetch>
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">My Portfolio</span>
          </div>
        </Link>

        <nav className="hidden lg:flex gap-6 xl:gap-8 text-md font-medium border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-3xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch
              className={linkClass(pathname, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex gap-4 text-xl">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-300 transition-colors duration-150"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="flex flex-col absolute right-6 gradient-bg top-16 w-[250px] lg:hidden items-center gap-6 py-6 text-white rounded-lg shadow-lg z-50"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-4 text-xl mt-2">
            {socialLinks.map((item, index) => (
              <a key={index} href={item.href} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
