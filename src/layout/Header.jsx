import { Link, useLocation } from "react-router-dom";
import Gravatar from "react-gravatar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesIfNeeded } from "../store/thunks/productThunks";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const cart = useSelector((state) => state.shoppingCart.cart);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const isLoggedIn = user && user.email;

  // 🔥 YENİ (ERROR FIX)
  const isInnerPage = ["/about", "/blog", "/contact", "/team", "/pricing"].includes(
    location.pathname
  );

  const totalCartCount = cart.reduce((total, item) => total + item.count, 0);

  useEffect(() => {
    dispatch(fetchCategoriesIfNeeded());
  }, [dispatch]);

  // 🔥 INNER PAGES
  const innerPages = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Product", path: "/shop" },
    { id: 3, title: "Pricing", path: "/pricing" },
    { id: 4, title: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full">
      <div className="bg-white">
        <div className="mx-auto flex max-w-[1438px] flex-col items-center gap-6 px-4 py-6 md:flex-row md:justify-between md:px-6">
          
          {/* LOGO */}
          <h1 className="text-[24px] font-bold text-[#252B42]">Bandage</h1>

          {/* NAV */}
          <nav className="flex flex-col items-center gap-4 md:flex-row">
            <Link to="/" className="hover:text-[#252B42]">Home</Link>

            {/* SHOP DROPDOWN */}
            <div className="group relative">
              <Link to="/shop" className="flex items-center gap-1 hover:text-[#252B42]">
                Shop <span>⌄</span>
              </Link>
            </div>

            <Link to="/about" className="hover:text-[#252B42]">About</Link>
            <Link to="/blog" className="hover:text-[#252B42]">Blog</Link>
            <Link to="/contact" className="hover:text-[#252B42]">Contact</Link>

            {/* 🔥 PAGES DROPDOWN */}
            <div className="group relative">
              <button className="flex items-center gap-1 hover:text-[#252B42]">
                Pages <span>⌄</span>
              </button>

              <div className="invisible absolute left-0 top-full z-50 w-[170px] rounded-md bg-white py-3 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {innerPages.map((page) => (
                  <Link
                    key={page.id}
                    to={page.path}
                    className="block px-5 py-3 text-[14px] font-bold text-[#737373] hover:bg-[#FAFAFA] hover:text-[#23A6F0]"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5 text-[#23A6F0]">
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;