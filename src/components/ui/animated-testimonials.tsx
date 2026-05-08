'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface Testimonial {
  quote: string
  name: string
  designation: string
  src: string
}

export function AnimatedTestimonials({ testimonials, autoplay = false }: { testimonials: Testimonial[]; autoplay?: boolean }) {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive(p => (p + 1) % testimonials.length), [testimonials.length])
  const prev = () => setActive(p => (p - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (!autoplay) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [autoplay, next])

  const isActive = (idx: number) => idx === active

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto px-4 py-20 font-sans">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Images */}
        <div className="relative h-80">
          <AnimatePresence>
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.src}
                initial={{ opacity: 0, scale: 0.9, z: -100, rotate: Math.random() * 21 - 10 }}
                animate={{ opacity: isActive(idx) ? 1 : 0.7, scale: isActive(idx) ? 1 : 0.95, z: isActive(idx) ? 0 : -100, rotate: isActive(idx) ? 0 : Math.random() * 21 - 10, zIndex: isActive(idx) ? 10 : testimonials.length - idx, y: isActive(idx) ? [0, -80, 0] : 0 }}
                exit={{ opacity: 0, scale: 0.9, z: 100 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0 origin-bottom"
              >
                <Image src={t.src} alt={t.name} width={500} height={500} draggable={false} className="h-full w-full rounded-3xl object-cover object-center" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text */}
        <div className="flex justify-between flex-col py-4 text-start">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl font-bold text-black">{testimonials[active].name}</h3>
            <p className="text-sm text-foreground">{testimonials[active].designation}</p>
            <motion.p className="text-lg text-foreground mt-8">
              {testimonials[active].quote.split(' ').map((word, i) => (
                <motion.span key={i} initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }} animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.02 * i }} className="inline-block">
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <button onClick={prev} className="h-7 w-7 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition">
              <ChevronLeft className="h-5 w-5 text-black" />
            </button>
            <button onClick={next} className="h-7 w-7 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition">
              <ChevronRight className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
