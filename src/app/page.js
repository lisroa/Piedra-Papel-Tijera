"use client";
import { useState } from "react";
import Peleadores from "@/components/peleadores";
import UserYPc from "@/components/user y pc";
import Animation from "@/components/animaciones";
import rock from "@/assets/peleadores/rock.png";
import paper from "@/assets/peleadores/paper.png";
import scissors from "@/assets/peleadores/scissors.png";
import user from "@/assets/user y pc/usuario.png";
import pc from "@/assets/user y pc/pc.png";
import vs from "@/assets/vs/vs.png";
import { fighterPc } from "@/utils/fighterPc";

export default function Home() {
  const [fighterUserImage, setFighterUserImage] = useState(user);
  const [fighterPcImage, setFighterPcImage] = useState(pc);
  const [fighterUserName, setFighterUserName] = useState("");
  const [fighterPcName, setFighterPcName] = useState("");
  const [result, setResult] = useState("");
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [showPlayAgain, setShowPlayAgain] = useState(false);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "Empate";
    } else if (
      (userChoice === "piedra" && computerChoice === "tijera") ||
      (userChoice === "papel" && computerChoice === "piedra") ||
      (userChoice === "tijera" && computerChoice === "papel")
    ) {
      return "Ganaste";
    } else {
      return "Perdiste";
    }
  };

  const handleUserChoice = (choice) => {
    setFighterUserImage(choice.image);
    setFighterUserName(choice.name);
    const randomIndex = getRandomInt(0, fighterPc.length - 1);
    const pcChoice = fighterPc[randomIndex];
    setFighterPcImage(pcChoice.image);
    setFighterPcName(pcChoice.name);
    const winner = determineWinner(choice.name, pcChoice.name);
    setResult(winner);
  };

  const playAgain = () => {
    setFighterUserImage(user);
    setFighterPcImage(pc);
    setFighterPcName("");
    setFighterUserName("");
    setResult("");
    setShowPlayAgain(false);
  };

  return (
    <div className="App flex flex-col justify-center items-center ">
      <div className="mx-auto">
        <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-4xl text-center">
          Elige tu peleador
        </h1>
        <div className="grid grid-cols-3 gap-x-4 gap-y-4 mt-20 sm:mt-10 ">
          <div className="col-span-1 flex items-center justify-center">
            <Animation>
              <Peleadores
                src={rock}
                alt="rock"
                style={{ width: "100%" }}
                action={() => {
                  handleUserChoice({ name: "piedra", image: rock });
                  setShowPlayAgain(true);
                  setButtonsDisabled(true);
                }}
                disabled={buttonsDisabled}
              />
            </Animation>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <Animation>
              <Peleadores
                src={paper}
                alt="paper"
                style={{ width: "100%" }}
                action={() => {
                  handleUserChoice({ name: "papel", image: paper });
                  setShowPlayAgain(true);
                  setButtonsDisabled(true);
                }}
                disabled={buttonsDisabled}
              />
            </Animation>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <Animation>
              <Peleadores
                src={scissors}
                alt="scissors"
                style={{ width: "100%" }}
                action={() => {
                  handleUserChoice({ name: "tijera", image: scissors });
                  setShowPlayAgain(true);
                  setButtonsDisabled(true);
                }}
                disabled={buttonsDisabled}
              />
            </Animation>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="grid grid-cols-3 gap-x-4">
            <div className="col-span-1 flex items-center justify-center">
              <UserYPc
                src={fighterUserImage}
                alt="user"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <UserYPc src={vs} alt="vs" style={{ width: "100%" }} />
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <UserYPc
                src={fighterPcImage}
                alt="pc"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {showPlayAgain && (
        <>
          <div className="w-80 h-20 border-4 border-white border-dashed rounded text-center items-center p-2 mt-10">
            <h1 className="text-center text-2xl p-4 text-white">{result}</h1>
          </div>
          <div className="mt-16">
            <Animation>
              <button
                className="border-4 border-white border-dashed rounded text-center items-center p-2"
                onClick={() => playAgain()}
              >
                <h3 className="text-white">Play Again</h3>
              </button>
            </Animation>
          </div>
        </>
      )}
    </div>
  );
}
