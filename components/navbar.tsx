import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="bg-[#151934]">
      <div className="container">
        <div className="nav-bar-brand">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="logo"
          />
        </div>

        <div className="nav-bar-menu" >
          <nav className="nav-bar">
            <ul className="nav-list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Features</a>
              </li>
              <li>
                <a href="/contact">Pricing</a>
              </li>
              <li>
                <a href="/contact">Blog</a>
              </li>
            </ul>
          </nav>
        </div>

<div>
    <button className="bg-[#7214FF] text-white rounded-4xl px-6 py-3.5 " >
        Get a Demo
    </button>
</div>

      </div>
    </div>
  );
}
