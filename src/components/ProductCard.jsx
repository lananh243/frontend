export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden">

      <div className="overflow-hidden">
        <img
          src={product.image}
          className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">

        <h3 className="font-semibold text-lg">
          {product.name}
        </h3>

        <p className="text-blue-600 font-bold mt-2 text-xl">
          ${product.price}
        </p>

        <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
          Add to Cart
        </button>

      </div>

    </div>
  );
}