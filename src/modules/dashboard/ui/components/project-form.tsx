"use client"
import {z} from 'zod'
import {toast } from 'sonner'
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import TextareaAutosize from 'react-textarea-autosize'
import { useState } from 'react'
import { ArrowUpIcon, Loader2Icon } from 'lucide-react'


import {cn} from "@/lib/utils"
import { useTRPC } from '@/trpc/client'
import {Button} from "@/components/ui/button"
import {Form,FormField} from "@/components/ui/form"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { PROJECT_TEMPLATES } from '../../constant'
import { useClerk } from '@clerk/nextjs'


const formSchema = z.object({
      value: z.string().min(1,{message:"Value is requried"})
                       .max(1000,{message:"Value is too long"}),


})


export const ProjectForm = () =>{
    const router  = useRouter()
    const clerk = useClerk()
    const [isFocuesd , setIsFoucsed] = useState(false);
    const queryClient = useQueryClient()

    const trpc = useTRPC()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:  zodResolver(formSchema),
        defaultValues:{
            value:"",
        }
    });
    const createProject=  useMutation(trpc.projects.create.mutationOptions({
        onSuccess:(data) =>{
    
            queryClient.invalidateQueries(
                trpc.projects.getMany.queryOptions(),
            );
                router.push(`/projects/${data.id}`)

        },
        onError:(error) =>{
            toast.error(error.message)
         if(error.data?.code === "UNAUTHORIZED"){
            clerk.openSignIn()
         }
        }
    }));
    const onSubmit = async(values:z.infer<typeof formSchema>) =>{
    await createProject.mutateAsync({
        value: values.value,
    })
    
}
    const onSelecte = (value: string) =>{
        form.setValue("value" , value,{
            shouldDirty:true,
            shouldValidate:true,
            shouldTouch:true,
        })
    }
    const isPending  = createProject.isPending;
    const isDisabled = isPending || !form.formState.isValid;

    return (
        <Form {...form}>
            <section className='space-y-6'>
          <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "relative border p-4 pt-1 rounded-xl bg-sidebar dark:bg-sidebar transition-all",
            isFocuesd && "shadow-xs ",
          )}
          >
                <FormField
                control={form.control}
                name='value'
                render={({field}) =>(
                    <TextareaAutosize
                    disabled={isPending}
                    {...field}
                    onFocus={() => setIsFoucsed(true)}
                    onBlur={() => setIsFoucsed(false)}
                    minRows={2}
                    maxRows={8}
                    className='pt-4 resize-none border-none w-full outline-none bg-transparent'
                    placeholder='what would you want to build?'
                    onKeyDown={(e) =>{
                        if(e.key === "Enter" && (e.ctrlKey || e.metaKey)){
                            e.preventDefault();
                            form.handleSubmit(onSubmit)(e);
                        }
                    }}
                    />

         
                )}
                />
                           <div className='flex gap-x-2 items-end justify-between pt-2'>
                            <div className='text-[10px] text-muted-foreground font-mono  '>
                                <kbd className=''> 
                                    <span className=' ml-auto pointer-events-none inline-flex h-5 select-none gap-1 rounded  border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground'>
                                        &#8984;
                                    </span>Enter
                                </kbd>
                                &nbsp; to submit


                            </div>
                            <Button 
                            disabled={isDisabled}
                            className={cn(
                                "size-8 rounded-full",
                             isDisabled && "bg-muted-foreground border"
                            )}
                    
                            >
                                {isPending ? (
                                    <Loader2Icon className='size-4 animate-spin' />
                                ): (
                                    <ArrowUpIcon /> 
                                )}
    
                            </Button>

                    </div>
          </form>

          <div className='flex-wrap justify-center gap-2 hidden md:flex max-w-3xl'>
            {PROJECT_TEMPLATES.map((template) =>(
                    <Button
                    key={template.title}
                    variant="outline"
                    size="sm"
                    className='bg-white dark:bg-sidebar'
                    onClick={() =>onSelecte
                        (template.prompt)
                    }
                    >
                        {template.emoji} {template.title}

                    </Button>
            ))}
        
          </div>
          </section>
        </Form>
    )
}