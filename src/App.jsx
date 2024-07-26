import Header from "./components/Header";
import Hero from "./components/Hero";
import Deals from "./components/Deals";
import New from "./components/New";
import LatestBlogs from "./components/LatestBlogs";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Hero />
        <Deals />
        <New />
        <LatestBlogs />
      </main>
    </>
  );
}

export default App;
