import { Truck, ShieldCheck, Headphones } from "lucide-react"

export default function WhyUs(){
  return(

    <section className="max-w-7xl mx-auto mt-16 my-12">

      <h2 className="text-center text-2xl font-semibold mb-10">
        Why Shop With Us?
      </h2>

      <div className="grid grid-cols-3 gap-8 text-center">

        <div className="p-6 shadow rounded">
          <Truck className="mx-auto mb-4"/>
          <h3 className="font-semibold">Free Shipping</h3>
          <p className="text-gray-500">On all orders</p>
        </div>

        <div className="p-6 shadow rounded">
          <ShieldCheck className="mx-auto mb-4"/>
          <h3 className="font-semibold">Authentic Products</h3>
          <p className="text-gray-500">100% Genuine Watches</p>
        </div>

        <div className="p-6 shadow rounded">
          <Headphones className="mx-auto mb-4"/>
          <h3 className="font-semibold">24/7 Support</h3>
          <p className="text-gray-500">Customer Assistance</p>
        </div>

      </div>

    </section>
  )
}