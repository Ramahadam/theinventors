import Image from 'next/image';
export default function AvatarStack() {
  return (
    <div className="avatar-stack flex -space-x-4 rtl:space-x-reverse">
      <Image
        src="/person-1.png"
        alt="Avatar 1"
        width={20}
        height={20}
        className="rounded-full"
      />
      <Image
        src="/person-2.png"
        alt="Avatar 2"
        width={20}
        height={20}
        className="rounded-full"
      />
      <Image
        src="/person-3.png"
        alt="Avatar 3"
        width={20}
        height={20}
        className="rounded-full"
      />
    </div>
  );
}
