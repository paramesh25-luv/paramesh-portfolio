export default function Navbar() {
  return (
    <nav className="w-full p-4 shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Paramesh Portfolio</h1>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
