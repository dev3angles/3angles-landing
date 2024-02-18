import "./App.css";
import triangle from "../public/triangle.svg";
import github from "../public/github.svg";
import phone from "../public/phone.svg";
import mail from "../public/mail.svg";
import linkedin from "../public/linkedin.svg";
import Header from "./components/header/header";
import form from "../public/form.svg";
import Card from "./components/card/card";
import Service from "./components/service/service";

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

      <main className="w-full box-border text-white px-10 pt-12 relative z-10">
        <h1
          className="pt-20 text-4xl sm:text-6xl"
          style={{ fontFamily: "Moul" }}
        >
          Redefiniendo la experiencia <br /> con estilo.
        </h1>
        <p className="mt-5 text-lg">
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
      <img srcSet={form} alt="triangles" className="w-screen mt-20" />
      <section
        className="flex flex-col flex-wrap justify-center gap-4 content-center bg-[#252525]"
        style={{ paddingBottom: "4rem" }}
      >
        <Card
          title="Diseño:"
          text="Descubre el enfoque innovador de diseño de 3angles. Eleva tu presencia en línea con diseño que cautiva."
          img="https://static.wixstatic.com/media/c48ac8872f4c44e1bc3681cd3c78b35b.jpg/v1/fill/w_490,h_480,fp_0.52_0.40,q_80,usm_0.66_1.00_0.01,enc_auto/c48ac8872f4c44e1bc3681cd3c78b35b.jpg"
        />
        <Card
          title="Datos:"
          text="3angles transforma datos en insights estratégicos con un backend
          sólido. Analítica profunda y KPIs estratégicos para impulsar tu
          éxito."
          img="https://static.wixstatic.com/media/11062b_73eb575d7f6746989757530b605a9105~mv2.jpg/v1/fill/w_799,h_480,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_73eb575d7f6746989757530b605a9105~mv2.jpg"
        />
        <Card
          title="Desarrollo:"
          text="Descubre el enfoque distintivo de desarrollo de 3angles. Desde la
          planificación hasta la implementación, nuestro equipo crea
          soluciones tecnológicas robustas y atractivas. Impulsamos tu visión
          con un desarrollo que va más allá de las expectativas."
          img="https://static.wixstatic.com/media/11062b_606c7b98d47748fe9d0c738c8739edb5~mv2.jpg/v1/fill/w_799,h_480,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_606c7b98d47748fe9d0c738c8739edb5~mv2.jpg"
        />
      </section>
      <section>
        <h1 className="pt-20 pb-10 text-4xl sm:text-6xl text-center text-white">
          Servicios
        </h1>
        <p className="text-center text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugit
          eaque facere, beatae voluptatem, cumque saepe expedita et officia
          tempora
        </p>
        <div className="flex flex-row w-full justify-center pt-20 gap-5 pb-20">
          <Service
            title="Servicio 1"
            text="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
            img="https://static.wixstatic.com/media/a3c153_bc2c2e55aaff4b66be9d460bb233ffe2~mv2.png/v1/fill/w_121,h_121,al_c,q_85,enc_auto/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash%202.png"
          />
          <Service
            title="Servicio 2"
            text="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
            img="https://static.wixstatic.com/media/a3c153_bc2c2e55aaff4b66be9d460bb233ffe2~mv2.png/v1/fill/w_121,h_121,al_c,q_85,enc_auto/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash%202.png"
          />
          <Service
            title="Servicio 3"
            text="Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book."
            img="https://static.wixstatic.com/media/a3c153_bc2c2e55aaff4b66be9d460bb233ffe2~mv2.png/v1/fill/w_121,h_121,al_c,q_85,enc_auto/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash%202.png"
          />
        </div>
      </section>
      <section className="bg-[#252525] pt-20 pb-20">
        <div
          className="cardContainer flex content-center justify-center flex-wrap rounded-xl overflow-hidden mx-auto"
          style={{
            background: "rgba(255,255,255,0.1)",
            width: "80%",
          }}
        >
          <div
            className="text-white text-center p-10 flex flex-col content-center justify-center"
            style={{ width: "50%" }}
          >
            <h1 className="text-3xl font-bold mb-5">Contactanos:</h1>
            <form action="" className="flex flex-col">
              <input
                className="mb-2 input-contact"
                type="text"
                id="name"
                name="name"
                placeholder="Ingresa tu nombre"
              />
              <input
                className="mb-2 input-contact"
                type="text"
                id="email"
                name="email"
                placeholder="Ingresa tu correo electronico"
              />
              <textarea
                className="mb-2 input-contact-textarea"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Escribe tu mensaje"
                style={{ resize: "none" }}
              ></textarea>
              <button type="submit" value="Submit" className="input-submit-btn">
                Enviar
              </button>
            </form>
          </div>
          <div
            className="bg-[#EED5D0] flex content-center justify-center"
            style={{ width: "50%" }}
          >
            <img
              src="https://static.wixstatic.com/media/c48ac8872f4c44e1bc3681cd3c78b35b.jpg/v1/fill/w_490,h_480,fp_0.52_0.40,q_80,usm_0.66_1.00_0.01,enc_auto/c48ac8872f4c44e1bc3681cd3c78b35b.jpg"
              alt="image"
              className=" object-cover "
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>
      </section>
      <footer style={{ height: "125px", background: "rgba(0,0,0,0.4)" }}>
        <div className="text-white p-6 flex flex-col gap-2 text-center">
          <small>© 2024 3ANGLES. Todos los derechos reservados.</small>
          <small>Email: dev3angles@gmail.com</small>
          <small>Phone: 123-456-7890</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
