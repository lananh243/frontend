export default function Categories() {

  const data = [
    "Men's Watches",
    "Women's Watches",
    "Smartwatches",
    "Luxury Collection"
  ]

  return (

    <section className="max-w-7xl mx-auto mt-10">

      <h2 className="text-center text-2xl font-semibold mb-6">
        Shop by Category
      </h2>

      <div className="grid grid-cols-4 gap-6">

        {data.map((item,i)=>(
          <div key={i} className="bg-gray-100 p-6 text-center rounded">
            {item}
          </div>
        ))}

      </div>

    </section>

  )
}