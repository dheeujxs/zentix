"use client"


import { CheckCircle } from "lucide-react"
import { MaxWidthWrapper } from "./max-width-wrapper"

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-pink-500" />,
    title: "Fast Performance",
    description: "Experience blazing fast speeds and optimized loading times for a smooth user experience."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-pink-500" />,
    title: "Secure",
    description: "We prioritize security to keep your data safe and protect your privacy at all times."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-pink-500" />,
    title: "User Friendly",
    description: "Intuitive and simple interfaces designed for ease of use for everyone."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-pink-500" />,
    title: "24/7 Support",
    description: "Our expert support team is here to help you anytime you need assistance."
  },
]

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper>
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zentix?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map(({ icon, title, description }, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
