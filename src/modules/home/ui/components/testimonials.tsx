'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Emily Carter',
    title: 'Solo Founder, LaunchStudio',
    image: '/users/emily.jpg',
    quote:
      "I described my startup idea, and Zentix built the landing page in under 5 minutes. It literally felt like magic. I haven’t touched code since.",
  },
  {
    name: 'Jason Lee',
    title: 'Product Manager, Nexa AI',
    image: '/users/jason.jpg',
    quote:
      "Zentix saves our team hours every week. From wireframes to full responsive pages—this AI builder is the real deal.",
  },
  {
    name: 'Ananya Mehta',
    title: 'UI Designer, VibeCore',
    image: '/users/ananya.jpg',
    quote:
      "As a designer, I was skeptical. But Zentix respects visual hierarchy and outputs beautiful, clean UI. Game changer for prototyping fast.",
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Loved by Founders, Designers & Builders
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Real feedback from people building real products — powered by AI and Zentix’s instant website generation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-gray-50 dark:bg-[#1a1a1a] border-none shadow-md">
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-800 dark:text-gray-200 text-sm italic">
                  “{testimonial.quote}”
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-gray-900 dark:text-white font-medium">{testimonial.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
