"use client"

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";


const InputSearch = () => {

  const searchRef = useRef()
  const router = useRouter()
  const handleSearch = (event) => {
    event.preventDefault()
    const keyword = searchRef.current.value
    router.push(`/search/${keyword}`)
  }

  return (
    <div className="relative ">
      <input placeholder="cari anime..." className="text-black rounded-md p-2 w-full" ref={searchRef}/>
      <button className="absolute top-2 end-2 ">
      <MagnifyingGlass size={24} className="text-slate-600" onClick={handleSearch}/>
      </button>
    </div>
  );
};
export default InputSearch;
