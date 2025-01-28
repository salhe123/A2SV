const Footer = () => (
  <footer className="bg-gray-800 text-white p-8 mt-8">
    <div className="flex flex-col gap-16 w-full max-w-screen-xl mx-auto">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Contact</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Contact Us</a></li>
            <li><a href="/" className="hover:text-gray-400">Support</a></li>
            <li><a href="/" className="hover:text-gray-400">FAQ</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Legal</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">Terms of Service</a></li>
            <li><a href="/" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-gray-400">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Company</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-400">About Us</a></li>
            <li><a href="/" className="hover:text-gray-400">Careers</a></li>
            <li><a href="/" className="hover:text-gray-400">Blog</a></li>
          </ul>
        </div>
      </div>
      <hr className="border-t-2 border-gray-600 w-full" />
      <div className="flex justify-between items-center">
        <p>&copy; 2025 your Company</p>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-400">Made with  by ThemeWagon</a></li>
            
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;