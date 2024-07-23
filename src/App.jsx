import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-3xl overflow-hidden">
        <Hero />
      </main>
    </>
  );
}

export default App;
