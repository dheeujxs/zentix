"use client"

import Image from "next/image"
import { Container } from "./container"
import NavMenu from "./nav-menu"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import { UserControl } from "@/components/user-control"
import { LayoutDashboard } from "lucide-react"
import Link from "next/link"

export const Header = () => {
    return (
        <header className="p-4 md:px-6 md:py-12 border-b border-input md:border-none sticky top-2 z-10 backdrop-blur md:backdrop-blur-none">
            <Container>
                <div className="flex items-center justify-between border border-transparent md:border-white/15 p-2.5 rounded-xl max-w-4xl mx-auto md:backdrop-blur-md">
                    
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.svg"
                            alt="zentix"
                            width={32}
                            height={32}
                            className="h-8 md:h-12 w-auto"
                        />
                        <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                            Zentix
                        </p>
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden md:block">
                        <NavMenu />
                    </div>

                    {/* Auth Buttons or User Controls */}
                    <div className="flex items-center gap-2">
                        <SignedOut>
                            <SignUpButton>
                                <Button variant="outline" size="sm">
                                    Sign up
                                </Button>
                            </SignUpButton>
                            <SignInButton>
                                <Button size="sm">
                                    Sign in
                                </Button>
                            </SignInButton>
                        </SignedOut>

                        <SignedIn>
                            <UserControl />
                            <Button  size="sm" className="gap-1">
                                <LayoutDashboard className="w-4 h-4" />
                                <Link href='/dashboard'>
                                Dashboard
                                </Link>
                            </Button>
                        </SignedIn>
                    </div>

                </div>
            </Container>
        </header>
    )
}
