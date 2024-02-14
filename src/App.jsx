import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <img
        src="./public/triangle.svg"
        alt="triangle"
        className="absolute right-0 top-0 no-select"
        style={{ userSelect: "none", zIndex: "-1" }}
      />

      <main className="w-full box-border text-white px-10 pt-20 relative z-10">
        <h1 className="pt-28 text-4xl" style={{ fontFamily: "Moul" }}>
          Redefiniendo la experiencia <br /> con estilo.
        </h1>
        <p className="mt-5">
          Diseño innovador, análisis preciso de datos y desarrollo sólido <br />
          para una experiencia digital renovada y auténtica.
        </p>
        <div className="flex flex-row gap-4 content-center mt-8">
          <a href="https://github.com">
            <img src="./public/github.svg" alt="github" />
          </a>
          <a href="#">
            <img
              src="./public/phone.svg"
              alt="phone"
              style={{ paddingTop: "4px" }}
            />
          </a>
          <a href="#">
            <img src="./public/mail.svg" alt="mail" />
          </a>
          <a href="#">
            <img
              src="./public/linkedin.svg"
              alt="linkedin"
              style={{ paddingBottom: "5px", paddingLeft: "7px" }}
            />
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
