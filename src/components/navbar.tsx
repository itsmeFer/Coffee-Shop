"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaRegImage } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  const menuItems = [
    { name: "Products", href: "/customer" },
    { name: "About us", href: "/customer/about" },
    { name: "Testimonial", href: "/testimonial" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow h-20">
      {/* Logo */}
      <div className="navbar-logo">
        <Image
          src="/hero/Logo.png"
          alt="Logo"
          className="w-10 h-10"
          height={10}
          width={10}
        />
      </div>

      {/* Menu */}
      <div className="navbar-menu flex gap-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
              pathname === item.href
                ? "bg-[#5B221B] text-white" // Menu aktif: coklat tua + teks putih
                : "text-gray-800 hover:bg-gray-100" // Menu biasa: teks hitam + hover abu
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Icon */}
      <div className="navbar-icons flex gap-4 text-lg text-gray-700 cursor-pointer">
        <FaSearch />
        <FaRegImage />
      </div>
    </nav>
  );
}
