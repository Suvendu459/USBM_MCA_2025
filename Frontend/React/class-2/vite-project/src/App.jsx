import "./App.css";
import Card from "./component/Card";

function App() {
  let college = "USBM";

  return (
    <>
      <h1 className="text-center text-4xl text-white mt-5">
        This is my first React project
      </h1>
      <h2>{college}</h2>
      <div className="flex gap-2">
        <Card name={"Suvendu"} age={22} role={"SDE-II"} />
        <Card name={"Rakesh"} age={22} role={"SDE-III"} />
        <Card name={"Sunat"} age={22} role={"SDE-II"} />
        <Card name={"Satya"} age={24} role={"SDE-II"} />
      </div>
    </>
  );
}

export default App;