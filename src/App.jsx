import Header from "./components/Header";
import Hero from "./components/Hero";
import Deals from "./components/Deals";
import New from "./components/New";
import LatestBlogs from "./components/LatestBlogs";
import products from "./constants/products";
import blogs from "./constants/blogs";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Hero />
        <Deals products={products} />
        <New products={products} />
        <LatestBlogs blogs={blogs} />
      </main>
    </>
  );
}

export default App;
