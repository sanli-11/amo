import Header from "./components/Header";
import Hero from "./components/Hero";
import Deals from "./components/Deals";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-3xl">
        <Hero />
        <Deals />
      </main>
    </>
  );
}

export default App;
