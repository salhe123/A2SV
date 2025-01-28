export default function Header() {
    return (
      <header className="w-full h-[702px] bg-[#212121]">
        <nav className="flex justify-between items-center p-4">
          <div className="text-white text-2xl font-bold">Logo</div>
          <ul className="flex space-x-4">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Contact</li>
          </ul>
        </nav>
        <div className="flex flex-col items-center justify-center h-[600px]">
          <h1 className="text-white text-6xl font-bold">Welcome to Food App</h1>
          <p className="text-white text-xl mt-4">Discover the best restaurants near you</p>
        </div>
      </header>
    );
  }