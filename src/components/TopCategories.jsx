import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const createSlug = (text) => {
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
  const gender = category.gender || category.code?.split(":")[0];

  if (gender === "k" || gender === "kadin" || gender === "kadın") {
    return "kadin";
  }

  if (gender === "e" || gender === "erkek") {
    return "erkek";
  }

  return gender;
};

const getCategoryName = (category) => {
  return category.title || category.name || category.code?.split(":")[1];
};

function TopCategories() {
  const categories = useSelector((state) => state.product.categories);

  const topCategories = useMemo(() => {
    return [...categories]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
  }, [categories]);

  if (topCategories.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#FAFAFA] px-4 py-14">
      <div className="mx-auto max-w-[1050px]">
        <div className="text-center">
          <h2 className="text-[24px] font-bold text-[#252B42]">
            Top Categories
          </h2>
          <p className="mt-2 text-[14px] text-[#737373]">
            En yüksek puanlı kategoriler
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:h-[500px]">
          {topCategories.map((category, index) => {
            const categoryName = getCategoryName(category);
            const genderPath = getGenderPath(category);

            return (
              <Link
                key={category.id}
                to={`/shop/${genderPath}/${createSlug(categoryName)}/${category.id}`}
                className={`relative overflow-hidden ${
                  index === 0
                    ? "md:w-[40%]"
                    : "md:w-[15%]"
                }`}
              >
                <img
                  src={category.img || category.image}
                  alt={categoryName}
                  className="h-[250px] w-full object-cover md:h-full"
                />

                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-[24px] font-bold">{categoryName}</h3>
                  <p className="mt-1 text-[14px] font-bold">
                    Rating: {category.rating}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TopCategories;