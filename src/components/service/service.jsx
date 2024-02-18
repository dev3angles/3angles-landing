export default function Service(props) {
  return (
    <div
      className="flex flex-col items-center justify-center text-white text-center p-4"
      style={{ width: "300px" }}
    >
      <img className="rounded-full" srcSet={props.img} alt="service" />
      <h1 className="pt-5 text-center text-2xl font-bold">{props.title}</h1>
      <p className="mt-10">{props.text}</p>
    </div>
  );
}
