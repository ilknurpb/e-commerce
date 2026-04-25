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

  const totalCartCount = cart.reduce((total, item) => total + item.count, 0);

  const createSlug = (text = "") => {
    return text
      .toLowerCase()
      .replaceAll("ı", "i")
      .replaceAll("ğ", "g")
      .replaceAll("ü", "u")
      .replaceAll("ş", "s")
      .replaceAll("ö", "o")
      .replaceAll("ç", "c")
      .replace(/\s+/g, "-");
  };

  const getGenderPath = (category) => {
  const codeGender = category?.code?.split(":")[0];
  const gender = category?.gender || codeGender;

  if (gender === "k" || gender === "kadin" || gender === "kadın") {
    return "kadin";
  }

  if (gender === "e" || gender === "erkek") {
    return "erkek";
  }

  return codeGender === "e" ? "erkek" : "kadin";
};

  const getCategoryName = (category) => {
    return category.title || category.name || category.code?.split(":")[1];
  };

  useEffect(() => {
    dispatch(fetchCategoriesIfNeeded());
  }, [dispatch]);

  const isInnerPage =
    location.pathname === "/about" ||
    location.pathname === "/team" ||
    location.pathname === "/pricing" ||
    location.pathname === "/contact";

  return (
    <header className="w-full">
      {!isInnerPage && (
        <div className="hidden bg-[#252B42] text-white md:flex">
          <div className="mx-auto flex h-[46px] max-w-[1438px] items-center justify-between gap-6 px-6">
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

            <p className="text-[14px] font-semibold">
              Follow Us and get Link chance to win 80% off
            </p>

            <div className="flex items-center gap-3 text-[14px] font-semibold">
              <span>Follow Us :</span>
              <img src="/icons/instagram.svg" alt="instagram" className="h-4 w-4" />
              <img src="/icons/youtube.svg" alt="youtube" className="h-4 w-4" />
              <img src="/icons/facebook.svg" alt="facebook" className="h-4 w-4" />
              <img src="/icons/twitter.svg" alt="twitter" className="h-4 w-4" />
            </div>
          </div>
        </div>
      )}

      <div className="bg-white">
        <div className="mx-auto flex max-w-[1438px] flex-col items-center gap-6 px-4 py-6 md:flex-row md:justify-between md:px-6">
          <div className="w-[187px] shrink-0">
            <h1 className="text-[24px] font-bold text-[#252B42]">Bandage</h1>
          </div>

          <nav className="flex flex-col items-center gap-4 md:flex-row">
            <Link to="/" className="hover:text-[#252B42]">Home</Link>

            <div className="group relative">
              <Link to="/shop" className="flex items-center gap-1 hover:text-[#252B42]">
                Shop <span>⌄</span>
              </Link>

              <div className="invisible absolute left-0 top-full z-50 w-[660px] bg-white p-10 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                <div className="flex gap-24">
                  <div>
                    <h3 className="mb-6 text-[16px] font-bold text-[#252B42]">Kadın</h3>

                    <div className="flex flex-col gap-4">
                      {categories
                        .filter((category) => getGenderPath(category) === "kadin")
                        .map((category) => {
                          const categoryName = getCategoryName(category);

                          return (
                            <Link
                              key={category.id}
                              to={`/shop/kadin/${createSlug(categoryName)}/${category.id}`}
                              className="text-[14px] font-bold text-[#737373]"
                            >
                              {categoryName}
                            </Link>
                          );
                        })}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-6 text-[16px] font-bold text-[#252B42]">Erkek</h3>

                    <div className="flex flex-col gap-4">
                      {categories
                        .filter((category) => getGenderPath(category) === "erkek")
                        .map((category) => {
                          const categoryName = getCategoryName(category);

                          return (
                            <Link
                              key={category.id}
                              to={`/shop/erkek/${createSlug(categoryName)}/${category.id}`}
                              className="text-[14px] font-bold text-[#737373]"
                            >
                              {categoryName}
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about" className="hover:text-[#252B42]">About</Link>
            <Link to="/blog" className="hover:text-[#252B42]">Blog</Link>
            <Link to="/contact" className="hover:text-[#252B42]">Contact</Link>
            <Link to="/pages" className="hover:text-[#252B42]">Pages</Link>
          </nav>

          <div className="relative flex shrink-0 items-center gap-5 text-[14px] font-semibold text-[#23A6F0]">
            {isLoggedIn ? (
              <div className="group relative flex items-center gap-2 text-[#252B42]">
                <Gravatar email={user.email} size={28} className="rounded-full" />

                <button type="button" className="font-bold">
                  {user.name || user.email} ⌄
                </button>

                <div className="invisible absolute right-0 top-full z-50 mt-3 w-[180px] rounded-md bg-white p-3 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  <Link
                    to="/orders"
                    className="block rounded px-3 py-2 text-[14px] text-[#252B42] hover:bg-gray-100"
                  >
                    Önceki Siparişlerim
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to={{ pathname: "/login", state: { from: location.pathname } }}
                  className="flex items-center gap-1"
                >
                  <img src="/icons/user.svg" alt="user" className="h-4 w-4" />
                  <span>Login</span>
                </Link>

                <Link to="/signup">Register</Link>
              </div>
            )}

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="flex items-center gap-1"
              >
                <img src="/icons/search.svg" alt="search" className="h-4 w-4" />
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 top-full z-50 mt-3 w-[260px] rounded-lg bg-white p-3 shadow-xl">
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Ürün ara..."
                    className="w-full rounded-md border px-3 py-2 text-[14px] text-[#252B42] outline-none"
                  />

                  <Link
                    to={`/shop?search=${searchText}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="mt-3 block rounded-md bg-[#23A6F0] py-2 text-center text-[13px] font-bold text-white"
                  >
                    Ara
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="flex items-center gap-1"
              >
                <img src="/icons/card.svg" alt="cart" className="h-4 w-4" />
                <span>{totalCartCount}</span>
              </button>

              {isCartOpen && (
                <div className="absolute right-0 top-full z-50 mt-3 w-[380px] rounded-lg bg-white p-4 text-[#252B42] shadow-xl">
                  <h3 className="mb-4 text-[16px] font-bold">
                    Sepetim ({totalCartCount} Ürün)
                  </h3>

                  {cart.length === 0 ? (
                    <p className="text-[14px] text-[#737373]">Sepet boş</p>
                  ) : (
                    <div className="flex max-h-[300px] flex-col gap-4 overflow-y-auto">
                      {cart.map((item) => (
                        <div key={item.product.id} className="flex gap-3 border-b pb-3">
                          <img
                            src={
                              item.product.image?.trim() ||
                              item.product.images?.[0]?.url?.trim() ||
                              item.product.thumbnail?.trim() ||
                              "https://placehold.co/80x80"
                            }
                            alt={item.product.name}
                            className="h-16 w-16 rounded object-cover object-top"
                          />

                          <div className="flex-1 text-left">
                            <p className="text-[13px] font-bold">
                              {item.product.name}
                            </p>

                            <p className="text-[12px] text-[#737373]">
                              Adet: {item.count}
                            </p>

                            <p className="text-[13px] font-bold text-[#23856D]">
                              ${item.product.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex gap-3">
                    <Link
                      to="/cart"
                      onClick={() => setIsCartOpen(false)}
                      className="flex-1 rounded-md border border-[#23A6F0] py-2 text-center text-[13px] font-bold text-[#23A6F0]"
                    >
                      Sepete Git
                    </Link>

                    <Link
                      to="/create-order"
                      onClick={() => setIsCartOpen(false)}
                      className="flex-1 rounded-md bg-[#23A6F0] py-2 text-center text-[13px] font-bold text-white"
                    >
                      Siparişi Tamamla
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/favorites" className="flex items-center gap-1">
              <img src="/icons/heart.svg" alt="heart" className="h-4 w-4" />
              <span>1</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;