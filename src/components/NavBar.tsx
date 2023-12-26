export default function NavBar() {
  const navItems = ["Home", "About", "Work", "Services"];
  return (
    <nav className="px-[5%] flex flex-row justify-between mt-3">
      {navItems.map((item, index) => (
        <div >
          <a href="/html/" className="font-bold" key={index}>
            {item}
          </a>
        </div>
      ))}
    </nav>
  );
}
