import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../store/thunks/productThunks";
import { setOffset } from "../store/actions/productActions";

const shopCategories = [
  {
    id: 1,
    title: "CLOTHS",
    items: "5 Items",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "CLOTHS",
    items: "5 Items",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "CLOTHS",
    items: "5 Items",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "CLOTHS",
    items: "5 Items",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "CLOTHS",
    items: "5 Items",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  },
];

function ShopPage() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const productList = useSelector((state) => state.product.productList);
  const total = useSelector((state) => state.product.total);
  const fetchState = useSelector((state) => state.product.fetchState);

  const [filterInput, setFilterInput] = useState("");
  const [filter, setFilter] = useState("");
  const [sortInput, setSortInput] = useState("");
  const [sort, setSort] = useState("");
  const limit = useSelector((state) => state.product.limit);
  const offset = useSelector((state) => state.product.offset);
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    dispatch(
      fetchProducts({
        category: categoryId || undefined,
        filter,
        sort,
        limit,
        offset,
      })
    );
  }, [dispatch, categoryId, filter, sort, limit, offset]);


  const handlePageChange = (page) => {
    const newOffset = (page - 1) * limit;
    dispatch(setOffset(newOffset));
  };
  const handleFilterClick = () => {
    setFilter(filterInput);
    setSort(sortInput);
    dispatch(setOffset(0));
  };
  useEffect(() => {
    dispatch(setOffset(0));
  }, [dispatch, categoryId]);
  console.log("categoryId:", categoryId);
  return (
    <main className="bg-white">
      {/* -------- SHOP HEADER -------- */}
      <section className="bg-[#FAFAFA]">
        <div className="mx-auto flex max-w-[1050px] flex-col gap-8 px-4 py-8 md:py-12">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-[24px] font-bold text-[#252B42] md:text-[40px]">
              Shop
            </h1>

            <div className="flex items-center gap-2 text-[14px] font-bold">
              <span className="text-[#252B42]">Home</span>
              <span className="text-[#BDBDBD]">{">"}</span>
              <span className="text-[#BDBDBD]">Shop</span>
            </div>
          </div>

          {/* CATEGORY CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {shopCategories.map((category) => (
              <div
                key={category.id}
                className="relative h-[300px] overflow-hidden sm:h-[300px]"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-[16px] font-bold">{category.title}</h3>
                  <p className="mt-2 text-[14px] font-semibold">
                    {category.items}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- FILTER ROW -------- */}
      {/* -------- FILTER ROW -------- */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-[1050px] flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-[14px] font-bold text-[#737373] md:text-left">
            Showing all {productList.length} of {total} results
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="text-[14px] font-bold text-[#737373]">Views:</span>

              <button className="flex h-11 w-11 items-center justify-center rounded-md border border-[#ECECEC] bg-white">
                ⊞
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-md border border-[#ECECEC] bg-white">
                ≣
              </button>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={filterInput}
                onChange={(event) => setFilterInput(event.target.value)}
                placeholder="Search"
                className="h-12 w-full rounded-md border border-[#DDDDDD] bg-white px-4 text-[14px] text-[#737373] outline-none sm:w-[190px]"
              />

              <select
                value={sortInput}
                onChange={(event) => setSortInput(event.target.value)}
                className="h-12 w-full rounded-md border border-[#DDDDDD] bg-white px-4 text-[14px] text-[#737373] outline-none sm:w-[190px]"
              >
                <option value="">Sort</option>
                <option value="price:asc">Price: Low to High</option>
                <option value="price:desc">Price: High to Low</option>
                <option value="rating:asc">Rating: Low to High</option>
                <option value="rating:desc">Rating: High to Low</option>
              </select>

              <button
                type="button"
                onClick={handleFilterClick}
                className="h-12 rounded-md bg-[#23A6F0] px-6 text-[14px] font-bold text-white"
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -------- PRODUCT GRID -------- */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-[1050px] px-4">
          {fetchState === "FETCHING" ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#23A6F0] border-t-transparent" />
            </div>
          ) : null}

          {fetchState === "FAILED" ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <p className="text-[14px] font-bold text-red-500">
                Ürünler alınırken bir hata oluştu.
              </p>
            </div>
          ) : null}

          {fetchState !== "FETCHING" && fetchState !== "FAILED" ? (
            <>
              <div className="grid grid-cols-1 justify-items-center gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14">
                {productList.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* -------- PAGINATION -------- */}
              <div className="mt-14 flex justify-center md:mt-16">
                <div className="flex overflow-hidden rounded-md border border-[#BDBDBD]">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(1)}
                    className="h-[60px] min-w-[70px] bg-[#F3F3F3] px-4 text-[14px] font-bold text-[#BDBDBD] disabled:cursor-not-allowed disabled:opacity-50 md:h-[74px] md:min-w-[83px]"
                  >
                    First
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => index + 1)
                    .slice(Math.max(currentPage - 2, 0), currentPage + 1)
                    .map((page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => handlePageChange(page)}
                        className={`h-[60px] min-w-[46px] text-[14px] font-bold md:h-[74px] ${currentPage === page
                          ? "bg-[#23A6F0] text-white"
                          : "bg-white text-[#23A6F0]"
                          }`}
                      >
                        {page}
                      </button>
                    ))}

                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="h-[60px] min-w-[70px] bg-white px-4 text-[14px] font-bold text-[#23A6F0] disabled:cursor-not-allowed disabled:opacity-50 md:h-[74px] md:min-w-[83px]"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </section>

      {/* -------- LOGOS -------- */}
      <section className="bg-[#FAFAFA] py-14 md:py-16">
        <div className="mx-auto max-w-[1050px] px-4">
          <div className="grid grid-cols-1 items-center justify-items-center gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            <img
              src="/icons/hooli.svg"
              alt="Hooli"
              className="h-10 object-contain opacity-60"
            />
            <img
              src="https://cdn.simpleicons.org/lyft/737373"
              alt="Lyft"
              className="h-12 object-contain opacity-60"
            />
            <img
              src="/icons/piedPiper.svg"
              alt="Pied Piper"
              className="h-10 object-contain opacity-60"
            />
            <img
              src="https://cdn.simpleicons.org/stripe/737373"
              alt="Stripe"
              className="h-10 object-contain opacity-60"
            />
            <img
              src="/icons/aws.svg"
              alt="AWS"
              className="h-14 object-contain opacity-60"
            />
            <img
              src="https://cdn.simpleicons.org/reddit/737373"
              alt="Reddit"
              className="h-14 object-contain opacity-60"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ShopPage;