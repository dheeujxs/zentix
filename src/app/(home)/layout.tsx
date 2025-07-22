import { Header } from "@/modules/home/ui/components/Header";
import React from "react";

interface Props {
    children: React.ReactNode
}

const  Layout  = ({children}:Props) => {
    return ( 
            <div>
                <Header />
                {children}
            </div>
     );
}

export default Layout;