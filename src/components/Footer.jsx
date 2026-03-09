export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 py-16">

        {/* Brand */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">
            WatchZone
          </h3>
          <p className="text-sm leading-6">
            Luxury watches crafted with precision and elegance. 
            Discover premium timepieces designed for modern style.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-white mb-4 font-semibold">
            Shop
          </h4>

          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">All Products</li>
            <li className="hover:text-white cursor-pointer">Featured</li>
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
            <li className="hover:text-white cursor-pointer">Best Sellers</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white mb-4 font-semibold">
            Support
          </h4>

          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Shipping Info</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white mb-4 font-semibold">
            Follow Us
          </h4>

          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">YouTube</li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-500">
        © 2026 WatchZone. All Rights Reserved.
      </div>

    </footer>
  );
}