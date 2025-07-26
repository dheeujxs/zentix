import { ProjectView } from "@/modules/projects/ui/views/project-view";
import { getQueryClient, trpc } from "@/trpc/server";
import {ErrorBoundary} from 'react-error-boundary'
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

interface Props {
    params: Promise<{
        projectId:string;
    }>
}

const Page = async ({params}:Props) => {
    const {projectId} = await params;

    const queryCleint =  getQueryClient();

    await  queryCleint.prefetchQuery(trpc.messages.getMany.queryOptions({
        projectId,
    }))
    await queryCleint.prefetchQuery(trpc.projects.getOne.queryOptions({
       id:  projectId,
    }))

    return (  
        <HydrationBoundary state={dehydrate(queryCleint)}>
            <ErrorBoundary fallback={<p>Error!</p>}>
            <Suspense fallback={<p>Loading..</p>}>
           <ProjectView  projectId={projectId} />
           </Suspense>
           </ErrorBoundary>
        </HydrationBoundary>
    );
}
 
export default Page;