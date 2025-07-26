import {  Navbar } from "@/modules/home/ui/components/Header";
import React from "react";

interface Props {
    children: React.ReactNode
}

const  Layout  = ({children}:Props) => {
    return ( 
            <div>
                < Navbar/>
                {children}
            </div>
     );
}

export default Layout;