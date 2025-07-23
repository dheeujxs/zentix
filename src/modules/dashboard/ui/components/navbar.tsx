"use client"

import Image from "next/image"


import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import { Container } from "@/modules/home/ui/components/container"
import { UserControl } from "@/components/user-control"



export const Navbar = () => {
    return (
        <header className="p-4  min-md:px-6 min-md:py-12 border-b border-input min-md:border-none sticky top-2 z-10 backdrop-blur min-md:backdrop-blur-none">
            <Container>
                <div className="flex items-center justify-between border border-transparent min-md:border-white/15 p-2.5 rounded-xl max-w-4xl mx-auto md:backdrop-blur-md">
                    <div className="flex items-center justify-center gap-2">
                        <Image height={12} width={12} src='/logo.svg' alt="zentix" className="w-auto h-8 min-md:h-12" />
                    <p className="text-xl  min-md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Zentix</p>
               
                 
                    </div> 

                      <SignedOut >
                    <div className="flex gap-2">
                        <SignUpButton >
                            <Button variant='outline'  size='sm'>
                                    Sign up
                            </Button>

                        </SignUpButton>
                        <SignInButton>
                            <Button   size='sm'>
                                    Sign in
                            </Button>

                        </SignInButton>

                    </div>

                 </SignedOut>
                 <SignedIn>
                    <UserControl showName />
                   
                 </SignedIn>
                  
                

                    
                     


                </div>


               
            </Container>

        </header>
    )
}