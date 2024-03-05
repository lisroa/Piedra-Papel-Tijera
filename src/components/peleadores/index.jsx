import Image from "next/image";

function Peleadores({ src }) {
  return (
    <div>
      <button>
        <Image src={src} className="h-102 w-86" />
      </button>
    </div>
  );
}

export default Peleadores;
