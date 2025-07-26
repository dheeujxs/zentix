import CTABanner from "@/modules/home/ui/components/cta"
import { FeaturesSection } from "@/modules/home/ui/components/features"
import { Hero } from "@/modules/home/ui/components/hero-section"
import { HowItWorks } from "@/modules/home/ui/components/how-it-works"
import TestimonialSection from "@/modules/home/ui/components/testimonials"


const page = () => {
  return (
   <>
   <Hero/>
   <FeaturesSection/>
   <HowItWorks />
   <TestimonialSection />
   <CTABanner />
   </>
  )
}

export default page
