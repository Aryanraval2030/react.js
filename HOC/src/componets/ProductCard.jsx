function ProductCard({ title, image, price, rating }) {
  return (
    <div className="border p-4 w-[250px] rounded-lg shadow-lg">
      <img src={image} className="h-[150px] w-full object-contain" />

      <h2 className="font-bold mt-2">{title}</h2>

      <p className="text-green-600">₹ {price}</p>

      <p>⭐ {rating}</p>
    </div>
  );
}

export default ProductCard;