import { Heart, ShoppingCart, User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4">

        <h1 className="text-2xl font-semibold">
          Watch<span className="text-gray-400">Zone</span>
        </h1>

        <nav className="flex gap-8 text-sm">
          <a className="border-b border-yellow-400 pb-1">Home</a>
          <a>Shop</a>
          <a>Brands</a>
          <a>About</a>
          <a>Contact</a>
        </nav>

        <div className="flex gap-5">
          <User size={20}/>
          <Heart size={20}/>
          <ShoppingCart size={20}/>
        </div>

      </div>
    </header>
  )
}