"use client";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

import { MessagesContainer } from "../components/message-container";
import { Suspense, useState } from "react";
import { Fragment } from "@/generated/prisma";
import { PorjectHeader } from "../components/project-header";
import { FragmentWeb } from "../components/fragment-web";

interface Props {
    projectId:string;
};



export const ProjectView = ({projectId}: Props) =>{
  
    const [activeFragment,setActiveFragment] = useState<Fragment | null>(null)

    return (
        <div className="h-screen">
            <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel
                    defaultSize={35}
                    minSize={20}
                    className="flex flex-col min-h-0"
                    >
                        <Suspense fallback={<p>Loading Project...</p>}>
                        <PorjectHeader projectId={projectId} />
                        </Suspense>
                        <Suspense />
                        <Suspense fallback={<p>Loading messages..</p>}>
            <MessagesContainer  projectId={projectId} 
            activeFragment={activeFragment}
            setActiveFramgent={setActiveFragment}
            />
            </Suspense>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
            defaultSize={65}
            minSize={50}>
         {!!activeFragment && <FragmentWeb  data={activeFragment} />}
            </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};
