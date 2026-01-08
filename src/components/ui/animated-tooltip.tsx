'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion'

export interface TooltipItem {
  id?: number
  name: string
  designation: string
  image: string
}

export function AnimatedTooltip({ items }: { items: TooltipItem[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useSpring(0, springConfig)
  const rotate = useTransform(x, [-100, 100], [-45, 45])
  const translateX = useTransform(x, [-100, 100], [-50, 50])

  return (
    <div className="flex flex-row items-center justify-center">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group -mr-4"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 10 } }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{ translateX, rotate }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 text-xs whitespace-nowrap"
              >
                <div className="absolute inset-x-10 z-30 w-1/5 -bottom-px bg-linear-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-2/5 z-30 -bottom-px bg-linear-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-base">{item.name}</div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            src={item.image}
            alt={item.name}
            width={40}
            height={40}
            className="object-cover object-top rounded-full h-10 w-10 border-2 border-white relative transition duration-500 group-hover:scale-105 group-hover:z-30"
          />
        </div>
      ))}
    </div>
  )
}
