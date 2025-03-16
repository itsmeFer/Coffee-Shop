import Link from "next/link";
import { FaSearch, FaRegImage } from "react-icons/fa"; // import icon biar kaya contoh

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Kiri: Logo */}
      <div className="navbar-logo">
        <img src="hero/Logo.png" alt="Logo" className="w-10 h-10"/>
      </div>

      {/* Tengah: Menu */}
      <div className="navbar-menu">
        <Link href="/">Products</Link>
        <Link href="/">About us</Link>
        <Link href="/">Testimonial</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* Kanan: Icon */}
      <div className="navbar-icons">
        <FaSearch />
        <FaRegImage />
      </div>
    </nav>
  );
}
