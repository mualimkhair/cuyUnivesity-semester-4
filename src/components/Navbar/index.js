import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
    <header className="bg-secondary flex md:flex-row flex-col md:justify-between md:items-center p-2 gap-2 sticky top-0 z-50">
        <div>
            <Link href='/' className="font-bold text-primary text-2xl">Cuy Anime List</Link>
        </div>
        <InputSearch />
    </header>
    )
}
export default Navbar