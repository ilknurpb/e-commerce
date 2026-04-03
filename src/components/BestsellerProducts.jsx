import ProductCard from "./ProductCard";

function BestsellerProducts() {
  const products = [
    {
      id: 1,
      image: "/images/product-1.jpg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    },
    {
      id: 2,
      image: "/images/product-2.jpg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    },
    {
      id: 3,
      image: "/images/product-3.jpg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    },
    {
      id: 4,
      image: "/images/product-4.jpg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    },
    {
      id: 5,
      image: "/images/product-5.jpg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    },
    {
      id: 6,
      image: "/images/product-6.jpg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    },
    {
      id: 7,
      image: "/images/product-7.jpg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    },
    {
      id: 8,
      image: "/images/product-8.jpg",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "16.48",
      price: "6.48",
      colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
    },
  ];

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
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestsellerProducts;