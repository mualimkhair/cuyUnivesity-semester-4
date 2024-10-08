import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 px-4">
      {api.data.map((anime) => {
        return (
          <Link href={`${anime.mal_id}`} className="cursor-pointer text-primary hover:text-accent transition-all">
            <Image src={anime.images.webp.image_url} alt="..." width={600} height={400} className="w-full max-h-72 object-cover" />
            <h3 className="font-bold lg:text-xl p-4 text-base ">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};
export default AnimeList;
