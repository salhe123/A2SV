const Header = () => (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/add-food" className="hover:text-gray-400">Add Food</a></li>
        </ul>
      </nav>
    </header>
  );
  
  export default Header;