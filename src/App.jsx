import Header from "./components/Header"
import Promo from "./components/Promo"
import Categories from "./components/Categories"
import Products from "./components/Products"
import WhyUs from "./components/WhyUs"
import Banner from "./components/Banner"
import Question from "./components/Footer"
import Footer from "./components/Footer"

export default function App(){

  return(
    <div className="bg-gray-100">

      <Header/>

      <Banner/>

      <Promo/>

      <Categories/>

      <Products/>

      <WhyUs/>

      
      <Footer/>
    </div>
  )
}