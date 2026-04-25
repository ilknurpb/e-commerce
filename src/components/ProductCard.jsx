import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/actions/shoppingCartActions";

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
  const gender = category?.gender || category?.code?.split(":")[0];

  if (gender === "k" || gender === "kadin" || gender === "kadın") {
    return "kadin";
  }

  if (gender === "e" || gender === "erkek") {
    return "erkek";
  }

  return "kadin";
};

const getCategoryName = (category) => {
  return category?.title || category?.name || category?.code?.split(":")[1] || "kategori";
};

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.product.categories);

  const category = categories.find(
    (item) => Number(item.id) === Number(product.category_id)
  );

  const categoryName = getCategoryName(category);
  const genderPath = getGenderPath(category);
  

  const image =
    product.image ||
    product.images?.[0]?.url ||
    product.thumbnail ||
    "https://placehold.co/400x600";

  const title = product.title || product.name || "Product";
  const department = product.department || categoryName || "Category";
  const price = product.price || product.sell_price || 0;
  const oldPrice = product.oldPrice || product.original_price || price;
  const colors = product.colors || [];

  const productDetailPath = `/shop/${genderPath}/${createSlug(
    categoryName
  )}/${product.category_id}/${createSlug(title)}/${product.id}`;

  const handleAddToCart = (event) => {
  event.preventDefault();
  event.stopPropagation();

  dispatch(addToCart(product));

  console.log("Sepete eklenen ürün:", product);
};

  return (
    <div className="flex flex-col items-center text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        to={productDetailPath}
        className="flex w-full flex-col items-center"
      >
        <div className="mb-6 aspect-[2/3] w-full overflow-hidden bg-[#F5F5F5] md:w-[239px]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <h3 className="mb-2 text-[16px] font-bold text-[#252B42]">
          {title}
        </h3>

        <p className="mb-3 text-[14px] font-bold text-[#737373]">
          {department}
        </p>

        <div className="mb-3 flex items-center gap-2 text-[16px] font-bold">
          <span className="text-[#BDBDBD]">${oldPrice}</span>
          <span className="text-[#23856D]">${price}</span>
        </div>

        {colors.length > 0 && (
          <div className="mb-4 flex gap-2">
            {colors.map((color, index) => (
              <span
                key={index}
                className="h-4 w-4 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </Link>

      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-4 rounded-md bg-[#23A6F0] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#1b8dcc]"
      >
        Sepete Ekle
      </button>
    </div>
  );
}

export default ProductCard;