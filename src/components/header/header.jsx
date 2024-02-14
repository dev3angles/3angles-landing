export default function Header() {
  return (
    <header
      style={{ height: "81px" }}
      className="w-full flex justify-between items-center flex-row box-border px-10 text-white backdrop-blur-sm fixed z-50"
    >
      <img
        srcSet="./public/LOGO_BLACK.svg"
        alt="LOGO"
        className="select-none"
      />
      <ul className="flex flex-row gap-3">
        <li className="hover:text-teal-400 transition-all duration-200 cursor-pointer">
          <a href="#">INICIO</a>
        </li>
        <li className="hover:text-teal-400 transition-all duration-200 cursor-pointer">
          <a href="#">ACERCA DE 3ANGLES</a>
        </li>
        <li className="hover:text-teal-400 transition-all duration-200 cursor-pointer">
          <a href="#">CONTACTANOS</a>
        </li>
      </ul>
    </header>
  );
}
