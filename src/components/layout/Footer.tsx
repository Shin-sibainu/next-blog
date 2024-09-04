import { footerNavItems } from "@/config/navItems";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-screen bg-slate-900 py-6 md:py-10 flex flex-col items-center gap-4">
      <nav>
        <ul className="flex items-center justify-center gap-10 text-slate-300">
          {footerNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-slate-50 duration-150"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div></div>
      <div className="text-slate-300">
        <span>Copyright © {new Date().getFullYear()} Created By ShinCode</span>
      </div>
    </footer>
  );
};

export default Footer;
