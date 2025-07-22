import { ProjectForm } from "@/modules/dashboard/ui/components/project-form";
import { ProjectsList } from "@/modules/dashboard/ui/components/projects-list";
import Image from "next/image";





const Page = () => {

  return ( 
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      <section className="space-y-6 py-[16vh] 2xl:py-28">
        <div className="flex flex-col items-center">
          <Image src='/logo.svg' alt="zentix" width={50} height={50} className="hidden md:block" />
        </div>
        <h1 className="text2xl md:text-5xl font-bold text-center">
          Build something with Zentix
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center">
          Create apps and websites by chatting with AI
        </p>
        <div className="max-w-3xl mx-auto w-full">
        <ProjectForm />
        </div>

      </section>
      <ProjectsList />
    </div>
    
   );
}
 
export default Page;