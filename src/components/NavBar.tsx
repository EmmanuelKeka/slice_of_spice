import { Link } from "react-router-dom";

export default function NavBar() {
  const navItems = ["Home", "About", "Work", "Services", "Contact Me"];
  const links = ["/", "AboutMe", "Work", "Description", "Contact Me"];
  return (
    <nav className="px-[5%] flex flex-row justify-between mt-3">
      {navItems.map((item, index) => (
        <div>
          <a className="font-bold" key={index}>
            {item}
          </a>
        </div>
      ))}
    </nav>
  );
}
