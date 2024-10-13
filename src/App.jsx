import { AboutMe } from "./components/AboutMe";
import { Skils } from "./components/Skils";
import { Header } from "./components/Header";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";

function App() {

  return (
    <main className="min-w-[320px]">
      <Header />
      <AboutMe />
      <Skils />
      <ContactMe />
      <Footer />
    </main>
  );
}

export default App;
