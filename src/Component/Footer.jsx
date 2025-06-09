import React from "react";
import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: <BsFacebook size={22} />,
    className: "hover:text-blue-500",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <BsInstagram size={22} />,
    className: "hover:text-pink-500",
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: <BsTwitter size={22} />,
    className: "hover:text-sky-400",
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: <BsGithub size={22} />,
    className: "hover:text-gray-400",
  },
  {
    href: "https://dribbble.com",
    label: "Dribbble",
    icon: <BsDribbble size={22} />,
    className: "hover:text-pink-400",
  },
];

const AppFooter = () => {
  return (
    <Footer
      container={true}
      className="fixed bottom-0 left-0 w-full shadow-lg border border-gray-200 dark:text-[#1f2937] dark:border-gray-700 bg-gray-50  transition-colors duration-300"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between py-2 px-4 text-gray-800 dark:text-white">
        {/* Left: Logo & Company Name */}
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <img
            src="https://addvalsolutions.com/assets/images/addval-logo80x61.png"
            alt="Addval Solutions Logo"
            className="h-7 w-7"
          />
          <span className="font-semibold text-lg tracking-wide">
            Addval Solutions
          </span>
        </div>

        {/* Center: Social Icons */}
        <div className="flex space-x-5 mb-2 md:mb-0">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`transition-colors text-blue-500 duration-200 ${link.className}`}
              key={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <Footer.Copyright href="/" by="Addval Solutions" year={2025} />
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
