import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function Layout({children}:{children:ReactNode}){
    return (
        <div className="font-sans bg-[#9C7A4D] text-base">
            <Navbar/>
            {children}

        </div>
    )
}