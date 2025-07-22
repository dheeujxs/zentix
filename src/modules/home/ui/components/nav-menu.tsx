"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { NavRoutes } from "../../lib/helpers"


interface Props {
    isMoblie?: boolean
}

const NavMenu = ({isMoblie}:Props) => {
  return (
    <nav className={cn("flex gap-8", isMoblie && "flex items-center gap-12")}>
         {NavRoutes.map((route) => (
                <Link key={route.link} href={route.link} className="text-white/70 hover:text-white transition  " >
                    {route.label}
                </Link>
         ))}
    </nav>
  )
}

export default NavMenu
