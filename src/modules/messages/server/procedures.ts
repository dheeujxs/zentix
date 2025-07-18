import { inngest } from "@/inngest/client";
import { prisma } from "@/lib/db";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { z } from "zod";

export const messsagesRouter = createTRPCRouter({
    getMany: baseProcedure
    .input(
        z.object({
            projectId:z.string().min(1,{message:"Project id is required"})
        })
    )
    .query(async({input}) =>{
        const message = await prisma.message.findMany({
            where:{
                    projectId:input.projectId,
            },
            include:{
                fragment:true,
            },
            orderBy:{
                updatedAt:"asc"
            },
            
        })
        return message
    }),
    create: baseProcedure
    .input(
        z.object({
            value: z.string().min(1,{message:"Message is requried"})
                        .max(1000,{message:"Value is too long"}),
                        projectId:z.string().min(1,{message:"Project id is required"})
        })
    )
    .mutation(async({input}) =>{
       const createMessage =  await prisma.message.create({
            data:{
                projectId:input.projectId,
                content:input.value,
                role:"USER",
                type:"RESULT"
            },
        
        });

        await inngest.send({
              name:"code-agent/run",
              data:{
              value:input.value,
              projectId:input.projectId,
              }
            })
            return createMessage;
    })
})

