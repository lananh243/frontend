export default function Banner() {
  return (
    <section className="relative bg-black text-white">

      <img
        src="https://images.unsplash.com/photo-1524592094714-0f0654e20314"
        className="w-full h-[450px] object-cover opacity-70"
      />

      <div className="absolute top-1/3 left-20">

        <h1 className="text-5xl font-semibold">
          Luxury Watches
        </h1>

        <p className="text-2xl mt-2 text-gray-300">
          Collection
        </p>

        <p className="mt-4 text-gray-300">
          Discover the perfect timepiece for your style
        </p>

        <button className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded">
          Shop Now
        </button>

      </div>

    </section>
  )
}