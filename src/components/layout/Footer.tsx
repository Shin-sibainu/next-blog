import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-screen bg-slate-900 md:py-10 flex flex-col items-center gap-4">
      <nav>
        <ul className="flex items-center justify-center gap-10 text-slate-300">
          <li>
            <Link href="/about" className="hover:text-slate-50 duration-150">
              About
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-slate-50 duration-150">
              Tags
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-slate-50 duration-150">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-slate-50 duration-150">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
      <div></div>
      <div className="text-slate-300">
        <span>Copyright © 2024 Created By ShinCode</span>
      </div>
    </footer>
  );
};

export default Footer;
