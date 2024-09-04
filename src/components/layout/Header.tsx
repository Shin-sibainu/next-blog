import { headerNavItems } from "@/config/navItems";
import Link from "next/link";

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto w-full py-8 px-4">
      <div className="flex items-center justify-between ">
        <div>
          <Link href="/" className="md:text-3xl text-2xl font-bold">
            NextBlog🚀
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-8 font-medium">
            {headerNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-teal-600 duration-150"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* <li>
            <Link href="/" className="hover:text-teal-500 duration-150">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-teal-500 duration-150">
              About
            </Link>
          </li>
          <li>
            <Link href="/tags" className="hover:text-teal-500 duration-150">
              Tags
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-teal-500 duration-150">
              Contact
            </Link>
          </li> */}
          </ul>
        </nav>
      </div>

      {/* hamburger menu*/}
    </header>
  );
};

export default Header;
