import Peleadores from "@/componets/peleadores";
import rock from "../assets/peleadores/rock.png";
import paper from "../assets/peleadores/paper.png";
import scissors from "../assets/peleadores/scissors.png";

export default function Home() {
  return (
    <div className="App">
      <h1 className="text-3xl mt-36 text-center">Elige tu peleador</h1>

      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 bg-red-200">
          <Peleadores src={rock} />
        </div>
        <div className="col-span-1 bg-red-100">
          <Peleadores src={paper} />
        </div>
        <div className="col-span-1 bg-red-50">
          <Peleadores src={scissors} />
        </div>
        <div className="col-span-1">
          <Peleadores src={rock} />
        </div>
        <div className="col-span-1">
          <Peleadores src={paper} />
        </div>
        <div className="col-span-1">
          <Peleadores src={scissors} />
        </div>
      </div>
    </div>
  );
}
