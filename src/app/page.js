import AnimeList from "@/components/AnimeList";
import Link from "next/link";
const home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();
  return (
    <div>
      <div className="p-4 flex justify-between ">
        <h1 className="font-bold text-xl md:text-2xl">Anime Populer</h1>
        <Link href="/populer" className="flex gap-1 text-sm mt-2 md:text-base hover:text-yellow-500 transition-all">
          Lihat Semua
          
        </Link>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2 px-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl rounded-lg bg-slate-500">
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default home;
