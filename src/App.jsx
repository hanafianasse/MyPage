import { AboutMe } from "./components/AboutMe";
import { Skils } from "./components/Skils";
import { Header } from "./components/Header";
import { ContactMe } from "./components/ContaactMe";

function App() {

  return (
    <main className="min-w-[320px]">
      <Header />
      <AboutMe />
      <Skils />
      <ContactMe />

      <div className="container mx-auto px-4">
        <br />
        <br />
        <br />
        <br />
      </div>
    </main>
  );
}

export default App;
