import Image from "next/image";

function Peleadores({ src }) {
  return (
    <div className="w-40 h-36">
      <button>
        <Image src={src} width={80} height={40} />
      </button>
    </div>
  );
}

export default Peleadores;
