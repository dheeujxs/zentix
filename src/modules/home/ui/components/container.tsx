"use client"

import { cn } from "@/lib/utils";

interface ContainerProps {
    className ?: string;
    children: React.ReactNode
}

export const Container = ({children,className}: ContainerProps) =>{
    return(
        <div className={cn("container mx-auto",className)}>
            {children}
        </div>
    )
}