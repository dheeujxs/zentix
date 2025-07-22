"use client"

import Image from "next/image"
import { Container } from "./container"
import NavMenu from "./nav-menu"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export const Header = () => {
    return (
        <header className="p-4  min-md:px-6 min-md:py-12 border-b border-input min-md:border-none sticky top-2 z-10 backdrop-blur min-md:backdrop-blur-none">
            <Container>
                <div className="flex items-center justify-between border border-transparent min-md:border-white/15 p-2.5 rounded-xl max-w-4xl mx-auto md:backdrop-blur-md">
                    <div className="flex items-center justify-center gap-2">
                        <Image height={12} width={12} src='/logo.svg' alt="zentix" className="w-auto h-8 min-md:h-12" />
                    <p className="text-xl  min-md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Zentix</p>
                    </div> 

                     <div className="hidden min-md:block">
                        <NavMenu />
                        </div> 

                        <div  className="flex gap-4 items-center">
                            <Link href='/dashboard'>
                           <Button className="cursor-pointer bg-radial-to-r bg-gradient-to-r from-pink-500 to-blue-500">
                            Dashboard
                           </Button>
                            </Link>
                        </div>


                </div>
               
            </Container>

        </header>
    )
}