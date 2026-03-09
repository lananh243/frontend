export default function Products(){

  const products = [
    {
      name:"Rolex Submariner",
      price:"$7,500",
      img:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
    },
    {
      name:"Omega Speedmaster",
      price:"$4,200",
      img:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
    },
    {
      name:"Tag Heuer Carrera",
      price:"$2,400",
      img:"https://images.unsplash.com/photo-1542496658-e33a6d0d50f6"
    },
    {
      name:"Seiko Presage",
      price:"$850",
      img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    }
  ]

  return(

    <section className="max-w-7xl mx-auto mt-12">

      <div className="grid grid-cols-4 gap-8">

        {products.map((p,i)=>(
          <div key={i} className="bg-white shadow rounded">

            <img
              src={p.img}
              className="h-64 w-full object-cover rounded-t"
            />

            <div className="p-4">

              <h3 className="font-semibold">
                {p.name}
              </h3>

              <p className="mt-1 text-gray-600">
                {p.price}
              </p>

              <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded">
                Add to Cart
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>

  )
}