'use client'

import * as motion from "motion/react-m"
import Image from 'next/image'

export default function Carousel({
  images,
  itemWidth = 40,
  itemHeight = 40,
  spacing = 60,
}: {
  images: string[]
  itemWidth?: number
  itemHeight?: number
  spacing?: number
}) {
  return (
    <div className="overflow-hidden w-full relative h-full">
      <div className="w-16 h-full absolute top-0 left-0 bg-linear-to-r from-secondary to-transparent z-20" />
      <div className="w-16 h-full absolute top-0 right-0 bg-linear-to-l from-secondary to-transparent z-20" />

      <motion.div
        className="flex space-x-0 h-fit"
        animate={{ x: `-${(itemWidth + spacing) * images.length - itemWidth / 2}px` }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear', delay: 0.5 }}
      >
        {[...images, ...images].map((img, index) => (
          <Image
            src={img}
            alt={`logo-${index}`}
            width={50}
            height={50}
            key={index}
            style={{ width: `${itemWidth}px`, height: `${itemHeight}px`, marginLeft: `${spacing}px` }}
            className="w-full h-20 object-contain"
          />
        ))}
      </motion.div>
    </div>
  )
}
