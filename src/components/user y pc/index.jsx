import Image from "next/image";

function UserYPc({ src }) {
  return (
    <div>
      <Image src={src} className="h-152 w-111" />
    </div>
  );
}

export default UserYPc;
