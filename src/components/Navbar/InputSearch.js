"use client"

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";


const InputSearch = () => {

  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (event) => {

    if (event.key === "Enter" || event.type === "click") {
    event.preventDefault()
    const keyword = searchRef.current.value
    router.push(`/search/${keyword}`)
    }

    
  }

  return (
    <div className="relative ">
      <input placeholder="cari anime..." className="rounded-md p-2 w-full " ref={searchRef} onKeyDown={handleSearch}/>
      <button className="absolute top-2 end-2 ">
      <MagnifyingGlass size={24} className="text-slate-600" onClick={handleSearch}/>
      </button>
    </div>
  );
};
export default InputSearch;
