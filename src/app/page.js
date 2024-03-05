import Peleadores from "@/components/peleadores";
import UserYPc from "@/components/user y pc";
import Animation from "@/components/animaciones";
import rock from "../assets/peleadores/rock.png";
import paper from "../assets/peleadores/paper.png";
import scissors from "../assets/peleadores/scissors.png";
import user from "@/assets/user y pc/usuario.png";
import pc from "@/assets/user y pc/pc.png";
import vs from "@/assets/vs/vs.png";

export default function Home() {
  return (
    <div className="App flex flex-col justify-center items-center ">
      <div className="mx-auto">
        <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-4xl text-center">
          Elige tu peleador
        </h1>
        <div className="grid grid-cols-3 gap-x-4 gap-y-4 mt-20 sm:mt-10 ">
          <div className="col-span-1 flex items-center justify-center">
            <Animation>
              <Peleadores src={rock} style={{ width: "100%" }} />
            </Animation>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <Peleadores src={paper} style={{ width: "100%" }} />
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <Peleadores src={scissors} style={{ width: "100%" }} />
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="grid grid-cols-3 gap-x-4">
            <div className="col-span-1 flex items-center justify-center">
              <UserYPc src={user} style={{ width: "100%" }} />
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <UserYPc src={vs} style={{ width: "100%" }} />
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <UserYPc src={pc} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 h-20 border-4 border-white border-dashed rounded text-center items-center p-2 mt-10">
        <h1 className="text-center text-2xl p-4 text-white">YOU WIN</h1>
      </div>
    </div>
  );
}
