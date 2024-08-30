import AnimeList from "@/app/components/AnimeList";
import Link from "next/link";
const home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const anime = await response.json();
  return (
    <div>
      <div className="p-4 flex justify-between ">
        <h1 className="font-bold text-xl md:text-2xl">Anime Populer</h1>
        <Link href="/populer" className="flex gap-1 text-sm mt-2 md:text-base">
          Lihat Semua
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
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
