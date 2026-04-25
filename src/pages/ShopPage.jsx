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

const brands = [
  "/icons/hooli.svg", // local
  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/lyft.svg",
  "/icons/piedPiper.svg", // local
  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg",
  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/reddit.svg",
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

  return (
    <main className="bg-white">
      {/* -------- PRODUCT GRID -------- */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-[1050px] px-4">
          <div className="grid grid-cols-1 justify-items-center gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14">
            {productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* -------- LOGOS -------- */}
      <section className="bg-[#FAFAFA] py-14 md:py-16">
        <div className="mx-auto max-w-[1050px] px-4">
          <div className="grid grid-cols-2 items-center justify-items-center gap-10 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt="brand"
                className="h-[40px] w-[100px] object-contain opacity-40 grayscale"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ShopPage;