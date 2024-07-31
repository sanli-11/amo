import Header from "./components/Header";
import Hero from "./components/Hero";
import Deals from "./components/Deals";
import New from "./components/New";
import LatestBlogs from "./components/LatestBlogs";
import Footer from "./components/Footer";
import products from "./constants/products";
import blogs from "./constants/blogs";

function App() {
  return (
    <div className="bg-stone-100">
      <Header />
      <main className="max-w-screen-2xl mx-auto bg-white">
        <Hero />
        <Deals products={products} />
        <New products={products} />
        <LatestBlogs blogs={blogs} />
        <Footer />
      </main>
    </div>
  );
}

export default App;
