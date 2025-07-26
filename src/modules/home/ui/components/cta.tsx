'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20 bg-white dark:bg-[#0f0f0f]">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-orange-100 via-transparent to-transparent dark:from-orange-900/20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Launch Your AI Website Instantly
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Describe your idea and let Zentix turn it into a fully responsive, beautiful site — in seconds.
        </p>
        <div className="mt-8">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="group text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
            >
              Go to Dashboard
              <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
