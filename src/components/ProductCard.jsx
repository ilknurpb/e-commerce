function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center text-center">

      {/* IMAGE */}
      <div className="mb-6 h-[360px] w-[239px] overflow-hidden bg-[#F5F5F5]">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* TITLE */}
      <h3 className="mb-2 text-[16px] font-bold text-[#252B42]">
        {product.title}
      </h3>

      {/* DEPARTMENT */}
      <p className="mb-3 text-[14px] font-bold text-[#737373]">
        {product.department}
      </p>

      {/* PRICE */}
      <div className="mb-3 flex items-center gap-2 text-[16px] font-bold">
        <span className="text-[#BDBDBD]">${product.oldPrice}</span>
        <span className="text-[#23856D]">${product.price}</span>
      </div>

      {/* 🔥 COLOR DOTS */}
      <div className="flex gap-2">
        {product.colors.map((color, index) => (
          <span
            key={index}
            className="h-4 w-4 rounded-full border border-gray-200"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

    </div>
  );
}

export default ProductCard;