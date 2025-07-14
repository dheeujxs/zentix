import {  getQueryClient ,trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";




const Page = async() => {

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(trpc.createAI.queryOptions({text:"Dheeraj"}))

  return ( 
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>loading..</p>}>
      <Client/>
      </Suspense>
    </HydrationBoundary>
   );
}
 
export default Page;