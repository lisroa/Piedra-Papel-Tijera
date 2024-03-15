import Image from "next/image";

function UserYPc({ src }, alt) {
  return (
    <div>
      <Image
        src={src}
        className="h-152 w-111"
        alt={alt}
        width={171}
        height={204}
      />
    </div>
  );
}

export default UserYPc;
