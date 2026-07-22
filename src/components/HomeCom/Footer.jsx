import { FaBolt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-10 flex flex-col md:flex-row justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
            <FaBolt className="text-black" />
          </div>

          <h2 className="text-2xl font-bold text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h2>
        </div>

        {/* Text */}
        <p className="text-gray-400 mt-4 md:mt-0">
          © 2026 SkyMart. All Rights Reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-lime-400">
            Privacy
          </a>

          <a href="#" className="hover:text-lime-400">
            Terms
          </a>

          <a href="#" className="hover:text-lime-400">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;