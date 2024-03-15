import Image from "next/image";

function Peleadores({ src, action, alt }) {
  return (
    <div>
      <button onClick={action}>
        <Image
          src={src}
          className="h-102 w-86"
          alt={alt}
          width={0}
          height={0}
        />
      </button>
    </div>
  );
}

export default Peleadores;
