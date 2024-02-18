export default function Card(props) {
  return (
    <div
      className="cardContainer flex content-center justify-center flex-wrap rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.1)",
        width: "70%",
      }}
    >
      <div
        className="text-white text-center p-10 flex flex-col content-center justify-center"
        style={{ width: "50%" }}
      >
        <h1 className="text-3xl font-bold mb-5">{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <div
        className="bg-[#EED5D0] flex content-center justify-center"
        style={{ width: "50%" }}
      >
        <img
          src={props.img}
          alt="image"
          className=" object-cover "
          style={{ maxHeight: "500px" }}
        />
      </div>
    </div>
  );
}
