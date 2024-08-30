import Image from "next/image";
import Link from "next/link";

const AnimeList = ({title, images, id}) => {
  return (
    <Link href={`${id}`} className="cursor-pointer">
      <Image src={images} alt="..." width={600} height={400} className="w-full max-h-72 object-cover"/>
      <h3 className="font-bold lg:text-xl p-4 text-base">{title}</h3>
    </Link>
  );
};
export default AnimeList;
