import Image from "next/image";

function Peleadores({ src, action, alt, disabled }) {
  return (
    <button onClick={action} disabled={disabled}>
      <Image src={src} className="h-102 w-86" alt={alt} width={0} height={0} />
    </button>
  );
}

export default Peleadores;
