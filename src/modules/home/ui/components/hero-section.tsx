'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MaxWidthWrapper } from './max-width-wrapper'
import { ShinyButton } from './shiny-button'
import Image from 'next/image'

export const Hero = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true)
    }, 1200)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center bg-brand-25 dark:bg-gray-900 overflow-hidden">
      {/* Vertical Animated Line */}
      <AnimatePresence>
        {!showContent && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ y: '120%', opacity: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute left-1/2 top-0 h-full w-[2px] bg-orange-500 origin-top z-10"
          />
        )}
      </AnimatePresence>

      <MaxWidthWrapper className="w-full text-center pt-32">
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center gap-8"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight max-w-3xl">
              Build AI Websites
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
                Instantly With Zentix
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl">
              Let AI handle design, code, and copy. Just describe your idea, and Zentix brings it to life.
            </p>
            <div className="mt-4">
              <ShinyButton href="/dashboard">
                Start For Free Today
              </ShinyButton>
            </div>
            <div className="mt-10">
              <Image
                src="/banner.png"
                alt="Zentix Hero"
                width={1000}
                height={600}
                className="w-full max-w-4xl rounded-xl shadow-lg"
                priority
              />
            </div>
          </motion.div>
        )}
      </MaxWidthWrapper>
    </section>
  )
}
