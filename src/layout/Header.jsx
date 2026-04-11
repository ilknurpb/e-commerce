import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="hidden md:flex bg-[#252B42] text-white">
        <div className="mx-auto  flex h-[46px] max-w-[1438px] items-center justify-between px-6">
          {/* Sol */}
          <div className="flex items-center gap-6 text-[14px] font-semibold">
            <div className="flex items-center gap-2">
              <img src="/icons/phone.svg" alt="phone" className="h-4 w-4" />
              <span>(225) 555-0118</span>
            </div>

            <div className="flex items-center gap-2">
              <img src="/icons/mail.svg" alt="mail" className="h-4 w-4" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>

          {/* Orta */}
          <p className="text-[14px] font-semibold">
            Follow Us and get Link chance to win 80% off
          </p>

          {/* Sağ */}
          <div className="flex items-center gap-3 text-[14px] font-semibold">
            <span>Follow Us :</span>
            <img src="/icons/instagram.svg" alt="instagram" className="h-4 w-4" />
            <img src="/icons/youtube.svg" alt="youtube" className="h-4 w-4" />
            <img src="/icons/facebook.svg" alt="facebook" className="h-4 w-4" />
            <img src="/icons/twitter.svg" alt="twitter" className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="bg-white">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* SOL: LOGO */}
          <div className="w-[187px] shrink-0">
            <h1 className="text-[24px] font-bold text-[#252B42]">Bandage</h1>
          </div>

          {/* ORTA: MENU */}
          <nav className="flex flex-col items-center gap-4 md:flex-row">
            <Link to="/" className="hover:text-[#252B42]">Home</Link>
            <Link to="/shop" className="hover:text-[#252B42]">Shop</Link>
            <Link to="/about" className="hover:text-[#252B42]">About</Link>
            <Link to="/blog" className="hover:text-[#252B42]">Blog</Link>
            <Link to="/contact" className="hover:text-[#252B42]">Contact</Link>
            <Link to="/pages" className="hover:text-[#252B42]">Pages</Link>
          </nav>

          {/* SAĞ: ACTIONS */}
          <div className="flex shrink-0 items-center gap-5 text-[14px] font-semibold text-[#23A6F0]">
            <div className="flex items-center gap-1">
              <img src="/icons/user.svg" alt="user" className="h-4 w-4" />
              <span>Login / Register</span>
            </div>

            <img src="/icons/search.svg" alt="search" className="h-4 w-4" />
            <img src="/icons/card.svg" alt="cart" className="h-4 w-4" />
            <span>1</span>

            <div className="flex items-center gap-1">
              <img src="/icons/heart.svg" alt="heart" className="h-4 w-4" />
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;