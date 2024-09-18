"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4"> 
                <FileSearch size={64} className="text-secondary"/>
                <h3 className="text-secondary font-bold text-2xl">
                    NOT FOUND
                </h3>
                <Link href='/' className="text-primary hover:text-accent underline">Kembali</Link>
            </div>
        </div>
    )
}

export default Page