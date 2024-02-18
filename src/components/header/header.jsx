import logo_black from "../../../public/LOGO_BLACK.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsMenuOpened(false);
      }
    });
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpened((prevIsMenuOpened) => !prevIsMenuOpened);
  };

  return (
    <header
      style={{ height: "81px" }}
      className="w-full flex justify-between items-center flex-row box-border px-10 text-white backdrop-blur-sm fixed z-50"
    >
      <img srcSet={logo_black} alt="LOGO" className="select-none" />
      <ul className="flex flex-row gap-3 list-links">
        <li className="hover:text-teal-400 transition-all duration-200 cursor-pointer">
          <a href="#">INICIO</a>
        </li>
        <li className="hover:text-teal-400 transition-all duration-200 cursor-pointer">
          <a href="#">ACERCA DE 3ANGLES</a>
        </li>
        <li className="hover:text-teal-400 transition-all duration-200 cursor-pointer">
          <a href="#contactanos">CONTACTANOS</a>
        </li>
      </ul>
      <div
        id="nav-icon1"
        className={isMenuOpened ? "open" : ""}
        onClick={handleMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`absolute w-screen h-96 top-0 left-0 spawn-menu-phone ${
          isMenuOpened ? "spawn-menu-phone-open" : "spawn-menu-phone-closed"
        }`}
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(10px)",
        }}
      >
        <ul
          className={`flex flex-col text-center gap-3 h-full justify-center text-2xl spawn-text-menu ${
            !isMenuOpened ? "die-text" : ""
          }`}
        >
          <li className="hover:text-teal-400 transition-all duration-200 cursor-pointer">
            <a href="#">INICIO</a>
          </li>
          <li className="hover:text-teal-400 transition-all duration-200 cursor-pointer">
            <a href="#">ACERCA DE 3ANGLES</a>
          </li>
          <li className="hover:text-teal-400 transition-all duration-200 cursor-pointer">
            <a href="#contactano">CONTACTANOS</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
