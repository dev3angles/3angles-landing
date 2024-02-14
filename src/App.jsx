import "./App.css";
import triangle from "../public/triangle.svg";
import github from "../public/github.svg";
import phone from "../public/phone.svg";
import mail from "../public/mail.svg";
import linkedin from "../public/linkedin.svg";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header />
      <img
        src={triangle}
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
            <img src={github} alt="github" />
          </a>
          <a href="#">
            <img src={phone} alt="phone" style={{ paddingTop: "4px" }} />
          </a>
          <a href="#">
            <img src={mail} alt="mail" />
          </a>
          <a href="#">
            <img
              src={linkedin}
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
