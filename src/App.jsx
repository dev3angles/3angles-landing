import "./App.css";
import triangle from "../public/triangle.svg";
import github from "../public/github.svg";
import phone from "../public/phone.svg";
import mail from "../public/mail.svg";
import linkedin from "../public/linkedin.svg";
import Header from "./components/header/header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

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
        <h1 className="pt-20 text-4xl" style={{ fontFamily: "Moul" }}>
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
      <section className="mt-20 flex flex-row flex-wrap justify-center gap-4 content-center">
        <article className="design-article flex align-center justify-center">
          <KeyboardArrowUpIcon style={{ fontSize: "70px" }} />
          <p>
            <b>Diseño:</b>
            <br />
            Descubre el enfoque innovador de diseño de 3angles. Desde logotipos
            hasta interfaces, fusionamos creatividad y funcionalidad para dejar
            una impresión duradera. Eleva tu presencia en línea con diseño que
            cautiva.
          </p>
        </article>
        <article className="design-article flex align-center justify-center">
          <KeyboardArrowLeftIcon style={{ fontSize: "70px" }} />
          <p>
            <b>Datos:</b>
            <br />
            3angles transforma datos en insights estratégicos con un backend
            sólido. Analítica profunda y KPIs estratégicos para impulsar tu
            éxito.
          </p>
        </article>
        <article className="design-article flex align-center justify-center">
          <KeyboardArrowRightIcon style={{ fontSize: "70px" }} />
          <p>
            <b>Desarrollo:</b>
            <br />
            Descubre el enfoque distintivo de desarrollo de 3angles. Desde la
            planificación hasta la implementación, nuestro equipo crea
            soluciones tecnológicas robustas y atractivas. Impulsamos tu visión
            con un desarrollo que va más allá de las expectativas.
          </p>
        </article>
      </section>
    </div>
  );
}

export default App;
