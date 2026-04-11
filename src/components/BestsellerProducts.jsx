import ProductCard from "./ProductCard";
import {products} from "../data/products";
function BestsellerProducts() {
  const bestSellers = products.filter((p) => p.isBestSeller);

  return (
    <section className="bg-[#FAFAFA] py-[80px]">
      <div className="mx-auto max-w-[1124px] px-4">
        <div className="mb-[48px] text-center">
          <h2 className="mb-2 text-[24px] font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-[14px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-y-[48px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bestSellers.map((product) => (
        <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestsellerProducts;