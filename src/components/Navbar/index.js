import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
    <header className="bg-slate-700 text-white md:flex justify-between p-2">
        <div>
            <Link href='/' className="font-bold text-xl md:text-2xl">Cuy Anime List</Link>
        </div>
        <InputSearch />
    </header>
    )
}
export default Navbar