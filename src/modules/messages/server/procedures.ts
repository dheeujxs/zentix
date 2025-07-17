import { inngest } from "@/inngest/client";
import { prisma } from "@/lib/db";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { z } from "zod";

export const messsagesRouter = createTRPCRouter({
    getMany: baseProcedure
    .query(async() =>{
        const message = await prisma.message.findMany({
            orderBy:{
                updatedAt:"desc"
            },
            
        })
        return message
    }),
    create: baseProcedure
    .input(
        z.object({
            value: z.string().min(1,{message:"Message is requried"})
        })
    )
    .mutation(async({input}) =>{
       const createMessage =  await prisma.message.create({
            data:{
                content:input.value,
                role:"USER",
                type:"RESULT"
            },
        
        });

        await inngest.send({
              name:"code-agent/run",
              data:{
              value:input.value,
              }
            })
            return createMessage;
    })
})

