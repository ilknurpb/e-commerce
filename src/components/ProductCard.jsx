function ProductCard({ image, title, department, price, oldPrice }) {
  return (
    <div>
      <img src={image} alt={title} className="w-full" />

      <div className="flex flex-col items-center px-4 py-4 text-center">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{department}</p>

        <div className="flex gap-2">
          <span className="text-gray-400 line-through">${oldPrice}</span>
          <span className="font-bold text-green-600">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;