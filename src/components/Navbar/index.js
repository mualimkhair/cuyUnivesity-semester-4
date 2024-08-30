import Link from "next/link"

const Navbar = () => {
    return (
    <header className="bg-slate-700 text-white md:flex justify-between p-2">
        <div>
            <Link href='/' className="font-bold text-xl md:text-2xl">Cuy Anime List</Link>
        </div>
        <input placeholder="cari anime..." className="text-black rounded-md"></input>
    </header>
    )
}
export default Navbar