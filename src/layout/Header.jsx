import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';

function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        
        <Link to="/" className="text-2xl font-bold">
          Bandage
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Search size={20} />
          <User size={20} />
          <ShoppingCart size={20} />
        </div>

        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;